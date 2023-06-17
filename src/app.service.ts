import { Injectable } from '@nestjs/common';
import blog_data from './data';
import { Category } from './data';
import { v4 as uuid } from 'uuid';

export type CreatePost = {
  title: string;
  author: string;
  body: string;
  category: Category;
};

type UpdatePost = {
  title?: string;
  body?: string;
  category?: Category;
};

@Injectable()
export class AppService {
  getAllBlogPosts() {
    return blog_data.posts;
  }

  getAllBlogPostsByCategory(category: Category) {
    return blog_data.posts.filter((post) => post.category === category);
  }

  getBlogPostById(id: string) {
    const data = blog_data.posts.filter((post) => post.id === id);

    return data;
  }

  createNewBlogPost({ title, author, body, category }: CreatePost) {
    const newBlogPost = {
      id: uuid(),
      title,
      created_at: new Date(),
      updated_at: new Date(),
      author,
      body,
      category,
    };

    blog_data.posts.push(newBlogPost);

    return newBlogPost;
  }

  updateBlogPostById(id: string, body: UpdatePost) {
    const data = blog_data.posts.filter((post) => post.id === id);

    if (!data) return;

    const dataIndex = blog_data.posts.findIndex((post) => post.id === id);

    blog_data.posts[dataIndex] = {
      ...blog_data.posts[dataIndex],
      ...body,
    };

    return blog_data.posts[dataIndex];
  }

  deleteBlogPostById(id: string) {
    const postIndex = blog_data.posts.findIndex((post) => post.id === id);

    if (postIndex === -1) return;

    blog_data.posts.splice(postIndex, 1);
  }
}

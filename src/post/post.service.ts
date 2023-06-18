import { Injectable } from '@nestjs/common';
import blog_data from 'src/data';
import { Category } from 'src/data';
import { v4 as uuid } from 'uuid';
import { ResponsePostDto } from 'src/dtos/post.dto';

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
export class PostService {
  getAllBlogPosts(): ResponsePostDto[] {
    return blog_data.posts.map((post) => new ResponsePostDto(post));
  }

  getAllBlogPostsByCategory(category: Category): ResponsePostDto[] {
    return blog_data.posts
      .filter((post) => post.category === category)
      .map((post) => new ResponsePostDto(post));
  }

  getBlogPostById(id: string): ResponsePostDto[] {
    const data = blog_data.posts.filter((post) => post.id === id);

    if (!data) return;

    return data.map((post) => new ResponsePostDto(post));
  }

  createNewBlogPost({
    title,
    author,
    body,
    category,
  }: CreatePost): ResponsePostDto {
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

    // return newBlogPost;
    return new ResponsePostDto(newBlogPost);
  }

  updateBlogPostById(id: string, body: UpdatePost): ResponsePostDto {
    const data = blog_data.posts.filter((post) => post.id === id);

    if (!data) return;

    const dataIndex = blog_data.posts.findIndex((post) => post.id === id);

    blog_data.posts[dataIndex] = {
      ...blog_data.posts[dataIndex],
      ...body,
    };

    return new ResponsePostDto(blog_data.posts[dataIndex]);
  }

  deleteBlogPostById(id: string) {
    const postIndex = blog_data.posts.findIndex((post) => post.id === id);

    if (postIndex === -1) return;

    blog_data.posts.splice(postIndex, 1);
  }
}

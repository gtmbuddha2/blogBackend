import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import blog_data from './data';
import { Category } from './data';
import { v4 as uuid } from 'uuid';

@Controller('blog/post/:category')
export class AppController {
  @Get('allPosts')
  getAllBlogPosts() {
    return blog_data.posts;
  }

  @Get('all')
  getAllBlogPostsByCategory(@Param('category') category: string) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return blog_data.posts.filter((post) => post.category === cat);
  }

  @Get(':id')
  getBlogPostById(
    @Param('id') id: string,
    @Param('category') category: string,
  ) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    const data = blog_data.posts.filter(
      (post) => post.category === cat && post.id === id,
    );

    return data;
  }

  @Post('')
  createNewBlogPost(
    @Body()
    {
      title,
      author,
      body,
    }: {
      title: string;
      author: string;
      body: string;
    },
    @Param('category') category: string,
  ) {
    const newBlogPost = {
      id: uuid(),
      title,
      created_at: new Date(),
      updated_at: new Date(),
      author,
      body,
      category: category === 'dog' ? Category.DOG : Category.CAT,
    };

    blog_data.posts.push(newBlogPost);

    return newBlogPost;
  }

  @Put(':id')
  updateBlogPostById(
    @Body()
    body: {
      title: string;
      body: string;
    },
    @Param('id') id: string,
    @Param('category') category: string,
  ) {
    console.log(body);
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    const data = blog_data.posts
      .filter((post) => post.category === cat)
      .find((post) => post.id === id);
    console.log(data);

    if (!data) return;

    const dataIndex = blog_data.posts.findIndex((post) => post.id === data.id);

    blog_data.posts[dataIndex] = {
      ...blog_data.posts[dataIndex],
      ...body,
    };

    return blog_data.posts[dataIndex];
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBlogPostById(@Param('id') id: string) {
    const postIndex = blog_data.posts.findIndex((post) => post.id === id);

    if (postIndex === -1) return;

    blog_data.posts.splice(postIndex, 1);

    // return;
  }
}

//  category = dogs, cats, etc.

//  get    /blog/post/:category/allPosts
//  get    /blog/post/:category/all
//  get    /blog/post/:category/:id
//  post   /blog/post/:category/
//  put   /blog/post/:category/:id
//  delete  /blog/post/:category/:id

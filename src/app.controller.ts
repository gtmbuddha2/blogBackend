import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import posts_data from './data';

@Controller('blog/post')
export class AppController {
  @Get('all')
  getAllBlogPosts() {
    return posts_data;
  }

  @Get(':id')
  getBlogPostById(@Param('id') id: string) {
    const data = posts_data.filter((data) => data.id === id);
    return data;
  }

  @Post('')
  createNewBlogPost() {
    return 'Created';
  }

  @Put(':id')
  updateBlogPostById() {
    return 'Updated';
  }

  @Delete(':id')
  deleteBlogPostById() {
    return 'Deleted';
  }
}

//  get    /blog/post/all
//  get    /blog/post/:id
//  post   /blog/post
//  put   /blog/post/:id
//  delete  /blog/post/:id

import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('blog/post')
export class AppController {
  @Get('all')
  getAllBlogPosts() {
    return [];
  }

  @Get(':id')
  getBlogPostById() {
    return {};
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

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
import { Category } from './data';
import { AppService } from './app.service';

@Controller('blog/post/:category')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('allPosts')
  getAllBlogPosts() {
    return this.appService.getAllBlogPosts();
  }

  @Get('all')
  getAllBlogPostsByCategory(@Param('category') category: string) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.getAllBlogPostsByCategory(cat);
  }

  @Get(':id')
  getBlogPostById(
    @Param('id') id: string,
    @Param('category') category: string,
  ) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.getBlogPostById(cat, id);
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
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.createNewBlogPost({ title, author, body }, cat);
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
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.updateBlogPostById(body, cat, id);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBlogPostById(@Param('id') id: string) {
    this.appService.deleteBlogPostById(id);

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

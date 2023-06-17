import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { Category } from './data';
import { AppService } from './app.service';

@Controller('blog/post/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('allPosts')
  getAllBlogPosts() {
    return this.appService.getAllBlogPosts();
  }

  @Get(':category/all')
  getAllBlogPostsByCategory(
    @Param('category', new ParseEnumPipe(Category)) category: string,
  ) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.getAllBlogPostsByCategory(cat);
  }

  @Get(':id')
  getBlogPostById(@Param('id', ParseUUIDPipe) id: string) {
    // @Param('id', ParseIntPipe)
    // console.log(id, typeof id);
    return this.appService.getBlogPostById(id);
  }

  @Post('')
  createNewBlogPost(
    @Body()
    {
      title,
      author,
      body,
      category,
    }: {
      title: string;
      author: string;
      body: string;
      category: Category;
    },
  ) {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;

    const data = {
      title,
      author,
      body,
      category: cat,
    };

    return this.appService.createNewBlogPost(data);
  }

  @Put(':id')
  updateBlogPostById(
    @Body()
    body: {
      title: string;
      body: string;
      cat: string;
    },
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const cat = body.cat === 'dog' ? Category.DOG : Category.CAT;
    const data = {
      title: body.title,
      body: body.body,
      category: cat,
    };
    console.log(data, id);
    return this.appService.updateBlogPostById(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBlogPostById(@Param('id', ParseUUIDPipe) id: string) {
    this.appService.deleteBlogPostById(id);

    // return;
  }
}

//  category = dogs, cats, etc.

//  get    /blog/post/allPosts
//  get    /blog/post/:category/all
//  get    /blog/post/:id
//  post   /blog/post/
//  put   /blog/post/:id
//  delete  /blog/post/:id

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
import {
  CreateNewBlogPostDto,
  updateBlogPostByIdDto,
  ResponsePostDto,
} from './dtos/post.dto';

@Controller('blog/post/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('allPosts')
  getAllBlogPosts(): ResponsePostDto[] {
    return this.appService.getAllBlogPosts();
  }

  @Get(':category/all')
  getAllBlogPostsByCategory(
    @Param('category', new ParseEnumPipe(Category)) category: string,
  ): ResponsePostDto[] {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.appService.getAllBlogPostsByCategory(cat);
  }

  @Get(':id')
  getBlogPostById(@Param('id', ParseUUIDPipe) id: string): ResponsePostDto[] {
    // @Param('id', ParseIntPipe)
    // console.log(id, typeof id);
    return this.appService.getBlogPostById(id);
  }

  @Post('')
  createNewBlogPost(
    @Body()
    { title, author, body, category }: CreateNewBlogPostDto,
  ): ResponsePostDto {
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
    body: updateBlogPostByIdDto,
    @Param('id', ParseUUIDPipe) id: string,
  ): ResponsePostDto {
    const cat = body.category === 'dog' ? Category.DOG : Category.CAT;
    const data = {
      title: body.title ? body.title : '',
      body: body.body ? body.body : '',
      category: cat,
    };
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

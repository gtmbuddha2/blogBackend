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
import { Category } from 'src/data';
import { PostService } from './post.service';
import {
  CreateNewBlogPostDto,
  updateBlogPostByIdDto,
  ResponsePostDto,
} from 'src/dtos/post.dto';

@Controller('blog/post/')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('allPosts')
  getAllBlogPosts(): ResponsePostDto[] {
    return this.postService.getAllBlogPosts();
  }

  @Get(':category/all')
  getAllBlogPostsByCategory(
    @Param('category', new ParseEnumPipe(Category)) category: string,
  ): ResponsePostDto[] {
    const cat = category === 'dog' ? Category.DOG : Category.CAT;
    return this.postService.getAllBlogPostsByCategory(cat);
  }

  @Get(':id')
  getBlogPostById(@Param('id', ParseUUIDPipe) id: string): ResponsePostDto[] {
    // @Param('id', ParseIntPipe)
    // console.log(id, typeof id);
    return this.postService.getBlogPostById(id);
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

    return this.postService.createNewBlogPost(data);
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
    return this.postService.updateBlogPostById(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBlogPostById(@Param('id', ParseUUIDPipe) id: string) {
    this.postService.deleteBlogPostById(id);

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

//  for counting total posts, stats, total comments, total authors, etc
//  get /summary/

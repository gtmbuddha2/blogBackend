import { Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';

@Injectable()
export class SummaryService {
  constructor(private readonly postService: PostService) {}

  getPostCount() {
    const data = { length: this.postService.getAllBlogPosts().length };
    return data;
  }
}

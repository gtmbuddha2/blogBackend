import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [PostModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}

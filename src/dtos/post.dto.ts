import { Category } from 'src/data';
import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateNewBlogPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsEnum(Category)
  @IsNotEmpty()
  category: string;
}

export class updateBlogPostByIdDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  body: string;

  @IsEnum(Category)
  @IsNotEmpty()
  category: string;
}

export class ResponsePostDto {
  id: string;
  title: string;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  author: string;
  body: string;
  category: Category;

  constructor(partial: Partial<ResponsePostDto>) {
    Object.assign(this, partial);
  }
}

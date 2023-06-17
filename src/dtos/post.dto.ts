import { Category } from 'src/data';
import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

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

import { IsDate, IsInt, IsString } from "class-validator";

export class CreateMovieDto {
  @IsString()
  readonly id: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsDate()
  releaseDate: Date;
  @IsInt()
  rating: number;
  @IsString()
  genre: string;
}
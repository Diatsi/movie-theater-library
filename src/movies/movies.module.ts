import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieSchema } from "src/models/movie.model";
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule { }
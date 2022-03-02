import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieS, MovieSchema } from "src/models/schemas/movie.schema";
@Module({
  imports: [MongooseModule.forFeature([{ name: MovieS.name, schema: MovieSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule { }
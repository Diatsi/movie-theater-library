import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {

  }
  @Post()
  async addMovie(
    @Body('title') movieTitle: string,
    @Body('description') movieDescription: string,
    @Body('releaseDate') movieDate: Date,
    @Body('rating') rating: number,
    @Body('genre') genre: string) {
    const generatedId = await this.moviesService.insertMovie(movieDescription, genre, rating, movieDate, movieTitle);
    return { id: generatedId };

  }
  @Get()
  async getAllMovies() {
    const products = await this.moviesService.getMovies();
    return products;
  }

  @Get(':id')
  getMovie(@Param('id') movieId: string) {
    return this.moviesService.getSingleMovie(movieId);
  }
  @Patch(':id')
  async updateMovie(@Param('id') movieId: string, @Body('title') movieTitle: string,
    @Body('description') movieDescription: string,
    @Body('releaseDate') movieDate: Date,
    @Body('rating') rating: number,
    @Body('genre') genre: string) {
    await this.moviesService.updateMovie(movieId, movieDescription, genre, rating, movieDate, movieTitle);
    return null;


  }
  @Delete(':id')
  async removeMovie(@Param('id') movieId: string) {
    await this.moviesService.deleteMovie(movieId);
    return null;

  }
}
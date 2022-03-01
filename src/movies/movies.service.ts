import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "src/models/movie.model";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class MoviesService {

  constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) { }

  async insertMovie(description: string, genre: string, rating: number, releaseDate: Date, title: string) {
    //if there is a different name then is should be title: Movietitle
    const newMovie = new this.movieModel({ title, description, releaseDate, rating: rating, genre });
    const result = await newMovie.save();
    return result.id as string;
  }

  async getMovies() {
    const movies = await this.movieModel.find().exec();
    return movies.map((m) => ({ id: m.id, title: m.title, description: m.description, releaseDate: m.releaseDate, rating: m.rating, genre: m.genre }));
  }

  async getSingleMovie(movieId: string) {
    const movie = await this.findMovie(movieId);
    return { id: movie.id, title: movie.title, description: movie.description, releaseDate: movie.releaseDate, rating: movie.rating, genre: movie.genre };
  }
  async updateMovie(movieId: string, description: string, genre: string, rating: number, releaseDate: Date, title: string) {
    const updatedMovie = await this.findMovie(movieId);
    if (description) {
      updatedMovie.description = description;
    }
    if (genre) {
      updatedMovie.genre = genre;
    }
    if (rating) {
      updatedMovie.rating = rating;
    }
    if (releaseDate) {
      updatedMovie.releaseDate = releaseDate;
    }
    if (title) {
      updatedMovie.title = title;
    }
    updatedMovie.save();

  }
  async deleteMovie(movieId: string) {
    const result = await this.movieModel.deleteOne({ _id: movieId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException("Could not find movie");
    }



  }
  private async findMovie(id: string): Promise<Movie> {
    let movie;
    try {
      movie = await this.movieModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find movie.');

    }
    if (!movie) {
      throw new NotFoundException('Could not find movie.');
    }
    return movie;
  }

}
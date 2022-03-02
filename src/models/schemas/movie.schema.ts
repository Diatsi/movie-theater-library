import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = MovieS & Document;

@Schema()
export class MovieS {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  releaseDate: Date;
  @Prop()
  rating: number;
  @Prop()
  genre: string;
}
export const MovieSchema = SchemaFactory.createForClass(MovieS);

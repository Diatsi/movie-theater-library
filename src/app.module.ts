import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule,MongooseModule.forRoot('mongodb+srv://john:MSZ03Pz4tNIFd72I@cluster0.leuei.mongodb.net/nestjs-demolibrary?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
  exports: [],

})
export class AppModule { }

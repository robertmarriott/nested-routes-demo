import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';

@Module({
  imports: [RouterModule.register(routes), PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

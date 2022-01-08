import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { Routes } from '@nestjs/core';

export const routes: Routes = [
  {
    path: '/posts',
    module: PostsModule,
    children: [
      {
        path: ':postId/comments',
        module: CommentsModule,
      },
    ],
  },
];

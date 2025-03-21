import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/firebase-auth.middleware';
import { CategoryModule } from './category/category.module';
import { SongModule } from './song/song.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { HistoryModule } from './history/history.module';
import { ArtistModule } from './artist/artist.module';
import { QueueModule } from './queue/queue.module';
import { LikeModule } from './like/like.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    AuthModule,
    CategoryModule,
    SongModule,
    PlaylistsModule,
    HistoryModule,
    ArtistModule,
    QueueModule,
    LikeModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'songs', method: RequestMethod.POST },
        { path: 'songs', method: RequestMethod.DELETE },
        { path: 'auth', method: RequestMethod.GET },
        { path: 'auth', method: RequestMethod.POST },
        { path: 'playlists/*', method: RequestMethod.ALL },
        { path: 'history/*', method: RequestMethod.ALL },
      );
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-flat-fog-adwk0pl3-pooler.c-2.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'npg_TCAcyIH3J6lm',
      database: 'am4',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: [User],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

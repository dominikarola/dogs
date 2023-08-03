import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogModule } from './dog/dog.module';

@Module({
  
  imports: 
  [ DogModule,
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    entities: ['**/*.entity.js']
  })
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

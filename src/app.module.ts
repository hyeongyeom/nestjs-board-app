import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';
import { TypeOrmExModule } from './boards/db/typeorm-ex.module';
import {BoardRepository} from './boards/board.repository'

@Module({
  imports: [
  TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmExModule.forCustomRepository([BoardRepository]),
    BoardsModule
  ]
})
export class AppModule {}

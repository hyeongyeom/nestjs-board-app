import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
// import { TypeOrmExModule } from './boards/db/typeorm-ex.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [  
TypeOrmModule.forRoot(typeORMConfig),
    // TypeOrmExModule.forCustomRepository([UserRepository,BoardRepository]),
    BoardsModule,
    AuthModule
  ]
})
export class AppModule {}

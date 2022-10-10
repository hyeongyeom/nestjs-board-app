import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig=config.get('db');


export const typeORMConfig: TypeOrmModuleOptions = {
    type:dbConfig.type,
    host:process.env.RDS_HOST_NAME || dbConfig.host,
    port:process.env.RDS_HOST_PORT || dbConfig.port,
    username:process.env.RDS_HOST_USERNAME || dbConfig.username,
    password:process.env.RDS_HOST_PASSWORD || dbConfig.password,
    database:process.env.RDS_HOST_DATABASE || dbConfig.database,
    entities:[__dirname + '/../**/*.entity.{js,ts}'],
    synchronize:dbConfig.synchronize,
}
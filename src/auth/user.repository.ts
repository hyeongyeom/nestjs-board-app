
// import { CustomRepository } from 'src/boards/db/typeorm-ex.decorator';
import { Repository,EntityRepository } from 'typeorm';
import { User } from './user.entitiy';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

// @CustomRepository(User)
@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async createUser(authCredentialsDto:AuthCredentialsDto):Promise<void> {
        const {username,password} = authCredentialsDto;

        const salt=await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(password,salt);

        const user=this.create({username,password:hashedPassword})

        try {
            await this.save(user);
        }catch(e) {
            if(e.code === '23505') {
                throw new ConflictException('Exsting username');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
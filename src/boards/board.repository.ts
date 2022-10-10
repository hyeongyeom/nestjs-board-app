import { Repository,EntityRepository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { User } from 'src/auth/user.entitiy';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

    async createBoard(createBoardDto:CreateBoardDto,user:User) : Promise<Board> {
        const {title,description} = createBoardDto

        const board=this.create({
            title,
            description,
            status:BoardStatus.PUBLIC,
            user
        })

        await this.save(board)
        return board
    }

   

    }


import { Repository,EntityRepository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
// import { CustomRepository } from './db/typeorm-ex.decorator';
import { CreateBoardDto } from './dto/create-board.dto';

// @CustomRepository(Board)
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

    async CreateBoard(createBoardDto:CreateBoardDto) : Promise<Board> {
        const {title,description} = createBoardDto

        const board=this.create({
            title,
            description,
            status:BoardStatus.PUBLIC
        })

        await this.save(board)
        return board
    }

   

    }


import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import User from './User';
import Office from './Office';
import Workplace from './Workplace';

@Entity()
export default class Reservation {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of reservation' })
    id: number;

  @Column('timestamp')
  @ApiProperty({ example: '1672564420', description: 'Time when reservation starts' })
    from: string;

  @Column('timestamp')
  @ApiProperty({ example: '1672564420', description: 'Time when reservation ends' })
    to: string;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  @ApiProperty({ example: 1, description: 'Id of user who create reservation' })
    user: number;

  @Column()
  @ManyToOne(() => Workplace, (workplace) => workplace.id)
  @ApiProperty({ example: 1, description: 'Id of workplace which reserved' })
    workplace: number;

  @Column()
  @ManyToOne(() => Office, (office) => office.id)
  @ApiProperty({ example: 1, description: 'Id of office where workplace is' })
    office: number;
}

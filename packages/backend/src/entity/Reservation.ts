import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import User from './User';
import Office from './Office';
import Workplace from './Workplace';

@Entity()
export default class Reservation {
  @PrimaryGeneratedColumn()
    id: number;

  @Column('timestamp')
    from: string;

  @Column('timestamp')
    to: string;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
    user: number;

  @Column()
  @ManyToOne(() => Workplace, (workplace) => workplace.id)
    workplace: number;

  @Column()
  @ManyToOne(() => Office, (office) => office.id)
    office: number;
}

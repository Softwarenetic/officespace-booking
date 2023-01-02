import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({
    length: 20,
  })
    name: string;

  @Column({
    length: 24,
  })
    surname: string;

  @Column({
    length: 20,
  })
    company: string;

  @Column({
    length: 20,
  })
    position: string;

  @Column({
    length: 50,
  })
    email: string;

  @Column('text')
    avatar: string;
}

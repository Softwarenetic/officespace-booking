import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of user' })
    id: number;

  @Column({
    length: 20,
  })
  @ApiProperty({ example: 'Taras', description: 'Name of user' })
    name: string;

  @Column({
    length: 24,
  })
  @ApiProperty({ example: 'Nechepurenko', description: 'Surname of user' })
    surname: string;

  @Column({
    length: 20,
  })
  @ApiProperty({ example: 'Softwarenetic', description: 'Company where user works' })
    company: string;

  @Column({
    length: 20,
  })
  @ApiProperty({ example: 'Middle devops', description: 'Position of user' })
    position: string;

  @Column({
    length: 50,
  })
  @ApiProperty({ example: 'example@gmail.com', description: 'Email of user' })
    email: string;

  @Column('text')
  @ApiProperty({ example: 'https://image.png', description: 'Url to user\'s profile image' })
    avatar: string;
}

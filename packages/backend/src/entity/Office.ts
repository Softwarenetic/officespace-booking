import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class Office {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of office' })
    id: number;

  @Column({
    length: 20,
  })
  @ApiProperty({ example: 'Office', description: 'Name of office' })
    name: string;

  @Column({
    length: 100,
  })
  @ApiProperty({ example: 'Heroiv UPA 77', description: 'Address of office' })
    address: string;

  @Column()
  @ApiProperty({ example: 1, description: 'Number of floor where office is' })
    floor: number;

  @Column('text')
  @ApiProperty({ example: '<svg version="1.1" xmlns="http://www.></svg>', description: 'Svg map of workplace' })
    svg: string;
}

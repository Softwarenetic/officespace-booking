import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class Settings {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of workplace' })
    id: number;

  @Column({
    type: 'text',
    array: true,
    default: [],
  })
  @ApiProperty({
    example: ['gmail.com'],
    description: 'Domains allowed to register in',
  })
    domains: string[];
}

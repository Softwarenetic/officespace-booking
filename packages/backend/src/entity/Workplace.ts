import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum WorkplaceType {
  TABLE = 'Table',
  ROOM = 'Meeting room',
}

@Entity()
export default class Workplace {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of workplace' })
    id: number;

  @Column({
    type: 'enum',
    enum: WorkplaceType,
    default: WorkplaceType.TABLE,
  })
  @ApiProperty({ example: 'TABLE', description: 'Workplace type' })
    type: WorkplaceType;

  @Column({
    length: 20,
  })
  @ApiProperty({ example: 'Meeting room', description: 'Name of room' })
    name: string;
}

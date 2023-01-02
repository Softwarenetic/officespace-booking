import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum WorkplaceType {
  TABLE = 'Table',
  ROOM = 'Meeting room',
}

@Entity()
export default class Workplace {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({
    type: 'enum',
    enum: WorkplaceType,
    default: WorkplaceType.TABLE,
  })
    type: WorkplaceType;

  @Column({
    length: 20,
  })
    name: string;
}

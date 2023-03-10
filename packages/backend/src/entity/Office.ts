import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  name: string;

  @Column({
    length: 100,
  })
  address: string;

  @Column()
  floor: number;

  @Column('text')
  svg: string;
}

export default Office;

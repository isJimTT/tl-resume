import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  //自增列
  @PrimaryGeneratedColumn()
  id: number;
  //普通列
  @Column()
  name: string;

  @Column()
  cover: string;

  @CreateDateColumn({
    name: 'create_time',
    nullable: true,
  })
  createTime: Date;
}

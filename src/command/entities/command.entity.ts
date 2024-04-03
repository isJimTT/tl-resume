import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Command {
  //自增列
  @PrimaryGeneratedColumn()
  resume_id: number;

  @Column()
  name: string;

  @Column()
  cover: string;

  @Column()
  content: string;

  @Column()
  parent_id: number;

  @CreateDateColumn({
    name: 'create_time',
    nullable: true,
  })
  createTime: Date;
}

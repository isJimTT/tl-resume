import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Resume {
  //自增列
  @PrimaryGeneratedColumn()
  id: number;
  //普通列
  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  pdf: string;

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

import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from './User';
import { Post } from './Posts';

@Entity()
export class Likes {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => Post, post => post.likes)
    post: Post;

    @ManyToOne(() => User, user => user.likes)
    user: User;
}
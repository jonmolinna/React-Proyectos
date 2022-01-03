import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Posts";
import { User } from "./User";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    body: string;

    @Column()
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

    @ManyToOne(() => User, user => user.comments)
    user: User;
}
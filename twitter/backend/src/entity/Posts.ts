import {
BeforeInsert,
Column,
CreateDateColumn,
Entity,
ManyToOne,
OneToMany,
PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Comments } from './Comment';
import { Likes } from './Like';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid'})
    uuid: string;

    @Column({ default: null })
    imagen: string;

    @Column({ default: null })
    comment: string;

    @Column()
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @OneToMany(() => Likes, like => like.id)
    likes: Likes[];

    @OneToMany(() => Comments, comment => comment.id)
    comments: Likes[];

    @BeforeInsert()
    createUuid(){
        this.uuid = uuid()
    };
}
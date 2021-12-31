import {
BeforeInsert,
Column,
CreateDateColumn,
Entity,
ManyToOne,
PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
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

    @ManyToOne(() => User)
    user: User;

    @BeforeInsert()
    createUuid(){
        this.uuid = uuid()
    };
}
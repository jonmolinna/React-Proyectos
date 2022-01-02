import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    BeforeInsert,
    OneToMany,
} from "typeorm";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

import { Post } from './Posts';
import { Likes } from "./Like";

@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid'})
    uuid: string;

    @Column()
    @IsNotEmpty({message: 'El usuario no debe estar vacío'})
    @MinLength(5, { message: 'El usuario debe tener 5 caracteres o más'})
    username: string;

    @Column()
    @IsNotEmpty( {message: 'El nombre no debe estar vacío'} )
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener más de 3 caracteres o más'})
    name: string

    @Column()
    @IsNotEmpty( {message: 'La contraseña no debe estar vacía'} )
    @MinLength(6, { message: 'La contraseña debe tener más de 6 caracteres'} )
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Post, post => post.id)
    posts: Post[];

    @OneToMany(() => Likes, like => like.id)
    likes: Likes[];

    @BeforeInsert()
        createUuid() {
            this.uuid = uuid()
    };

    hashPassword(): void {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    };
};
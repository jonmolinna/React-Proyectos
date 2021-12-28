import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    BeforeInsert,
} from "typeorm";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid'})
    uuid: string;

    @Column()
    @IsNotEmpty()
    @MinLength(5)
    username: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string

    @Column()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

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
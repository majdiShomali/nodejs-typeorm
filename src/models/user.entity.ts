import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id!: number | string

    @Column()
    firstName!: string

    @Column()
    lastName!: string
}
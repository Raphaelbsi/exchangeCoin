import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  login: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password?: string;
}

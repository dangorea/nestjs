import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove, AfterUpdate
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log("Updated User with", this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log("Removed User with", this.id);
  }
}

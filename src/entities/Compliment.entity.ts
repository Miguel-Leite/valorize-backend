import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,  
    JoinColumn,
    ManyToOne
} from "typeorm";
import { v4 as uui } from 'uuid';
import { Tag } from "./Tag.entity";
import { User } from "./User.entity";

@Entity('compliments')
export class Compliment {

    @PrimaryColumn()
    readonly id:string;

    @Column()
    user_sender: string;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor () {
        if (!this.id) {
            this.id = uui();
        }
    }
}
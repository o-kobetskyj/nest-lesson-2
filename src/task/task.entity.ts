import { ITask, Status } from "./task.interface";

export class Task implements ITask {
    id = new Date().getTime();
    task: string;
    status: Status = Status.CREATED;
    tags: string[];

    createdAte: Date = new Date();
    updatedAte: Date = new Date();

    constructor(task: string, tags?: string[], status?: Status){
    this.task = task;
    }
} 
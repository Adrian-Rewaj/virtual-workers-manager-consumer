import { VirtualWorker } from '../config/config';
import { IWorkerService } from '../interfaces/IWorkerService';
import { AMQPMessage } from '../models/AMQPMessage';
import { FormBotWorkerService } from './FormBotWorkerService';

export class WorkerManagerService implements IWorkerService {
    private readonly workerList: Record<VirtualWorker, IWorkerService>;

    public constructor (
        private readonly formBotWorkerService: FormBotWorkerService
    ) {
        this.workerList = {
            [VirtualWorker.FORM_BOT]: this.formBotWorkerService
        };
    }

    public async handle (msg: AMQPMessage): Promise<AMQPMessage> {
        if (this.workerList[msg.worker]) {
            await this.workerList[msg.worker].handle(msg);
        }

        return msg;
    }
}

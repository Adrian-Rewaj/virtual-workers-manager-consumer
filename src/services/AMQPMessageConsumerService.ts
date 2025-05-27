import { config } from '../config/config';
import { AMQPService } from './AMQPService';
import { WorkerManagerService } from './WorkerManagerService';

export class AMQPMessageConsumerService {
    public constructor (
        private readonly amqpService: AMQPService,
        private readonly workerManagerService: WorkerManagerService
    ) {
    }

    public async consume (): Promise<void> {
        console.log('Application Consumer start');
        this.amqpService.assertQueue(
            this.workerManagerService,
            config.amqp.queue
        );
    }
}

import { AMQPMessage } from '../models/AMQPMessage';
import { IAMQPMessageHandler } from './IAMQPMessageHandler';

export interface IWorkerService extends IAMQPMessageHandler {
    handle (msg: AMQPMessage): Promise<AMQPMessage>;
}

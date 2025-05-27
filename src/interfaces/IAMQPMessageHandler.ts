import { AMQPMessage } from '../models/AMQPMessage';

export interface IAMQPMessageHandler {
    handle (msg?: AMQPMessage): Promise<AMQPMessage>;
}

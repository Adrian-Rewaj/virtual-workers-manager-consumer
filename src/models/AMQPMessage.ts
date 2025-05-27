import { VirtualWorker, VirtualWorkerSettings } from '../config/config';

export class AMQPMessage {
    worker: VirtualWorker;
    settings: VirtualWorkerSettings;
}

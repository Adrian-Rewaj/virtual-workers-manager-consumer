import { AMQPMessageConsumerService } from './services/AMQPMessageConsumerService';
import { AMQPService } from './services/AMQPService';
import { FormBotWorkerService } from './services/FormBotWorkerService';
import { MessageContentParserService } from './services/MessageContentParserService';
import { WorkerManagerService } from './services/WorkerManagerService';

async function bootstrap (): Promise<void> {
    const msgConsumerService = new AMQPMessageConsumerService(
        new AMQPService(new MessageContentParserService()),
        new WorkerManagerService(new FormBotWorkerService())
    );
    msgConsumerService.consume();
}

bootstrap();

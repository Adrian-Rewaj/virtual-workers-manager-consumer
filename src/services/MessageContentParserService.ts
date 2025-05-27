import { AMQPMessage } from '../models/AMQPMessage';

export class MessageContentParserService {
    public async parse (jsonString: string): Promise<AMQPMessage> {
        return JSON.parse(jsonString);
    }

    public async stringify (msg: AMQPMessage): Promise<string> {
        return JSON.stringify(msg);
    }
}

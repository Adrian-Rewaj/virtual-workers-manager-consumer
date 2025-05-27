import * as dotenv from 'dotenv';
import * as path from 'path';
import { EnvHelper } from '../helpers/EnvHelper';

dotenv.config({
    path: path.join(process.cwd(),
        `.env.${process.env.NODE_ENV && process.env.NODE_ENV.length > 0
            ? process.env.NODE_ENV
            : 'development'}`)
});
export const config = {
    amqp: {
        hostname: EnvHelper.getOsEnv('AMQP_HOSTNAME'),
        queue: EnvHelper.getOsEnv('AMQP_QUEUE'),
        user: EnvHelper.getOsEnv('AMQP_USER'),
        password: EnvHelper.getOsEnv('AMQP_PASSWORD')
    }
};

export enum VirtualWorker {
    FORM_BOT = "FORM_BOT"
}

export interface VirtualWorkerSettings {
    formId: number;
    subscriberId: number;
}

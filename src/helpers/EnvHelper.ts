import { join } from 'path';

export class EnvHelper {
    public static getOsEnv (key: string): string {
        if (typeof process.env[key] === 'undefined') {
            throw new Error(`Environment variable ${key} is not set.`);
        }

        return process.env[key];
    }

    public static getOsEnvOptional (key: string): string | undefined {
        return process.env[key];
    }

    public static getPath (path: string): string {
        return (process.env.NODE_ENV === 'production')
            ? join(process.cwd(), path.replace('src/', 'dist/').slice(0, -3) + '.js')
            : join(process.cwd(), path);
    }

    public static getPathList (paths: string[]): string[] {
        return paths.map(p => EnvHelper.getPath(p));
    }

    public static getOsPath (key: string): string {
        return EnvHelper.getPath(EnvHelper.getOsEnv(key));
    }

    public static getOsPathList (key: string): string[] {
        return EnvHelper.getPathList(EnvHelper.getOsEnvArray(key));
    }

    public static getOsEnvArray (key: string, delimiter: string = ','): string[] {
        return process.env[key] && process.env[key].split(delimiter) || [];
    }

    public static toNumber (value: string): number {
        return parseInt(value, 10);
    }

    public static toBool (value: string): boolean {
        return value === 'true';
    }

    public static normalizePort (port: string): number | string | boolean {
        const parsedPort = parseInt(port, 10);

        if (isNaN(parsedPort)) { // named pipe
            return port;
        }

        if (parsedPort >= 0) { // port number
            return parsedPort;
        }

        throw new Error(`Invalid port`);
    }
}

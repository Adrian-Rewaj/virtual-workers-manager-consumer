export class UnknownError extends Error {
    constructor() {
        super('Something went wrong...');
        this.message = 'Something went wrong...';
        this.name = 'UnknownError';
    }
}

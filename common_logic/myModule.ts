// myModule.ts
export function sayHello(message: string): string {
    if (message === undefined) {
        throw new Error('message is required'); // Throw an error if message is undefined
    }
    return `hola, ${message}`
}

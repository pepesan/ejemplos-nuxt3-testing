// anotherModule.ts
import { sayHello } from './myModule';

export function createModifiedGreeting(name: string): string {
    if (typeof name !== 'string') {
        throw new Error('name must be a string'); // Throw an error if name is not a string
    }
    const baseGreeting = sayHello(name); // Call the imported function
    const modifiedGreeting = baseGreeting.toUpperCase() + "!"; // Modify the string
    return modifiedGreeting;
}


export function picker<T>(args: T[]): T {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}
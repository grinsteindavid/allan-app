export default async function applyQueueInSequence(prevState: any, queue: any) {
    let currentState = prevState;

    await queue.reduce(async (prevTask: any, nextTask: any) => {
        currentState = await nextTask(currentState)
    }, Promise.resolve());

    return currentState;
}
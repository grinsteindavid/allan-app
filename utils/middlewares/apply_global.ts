
import applyQueueInSequence from 'utils/promises/queue';
import { Interceptors } from 'use-http';
import GlobalMiddlewares from 'api/middlewares/global';

export default function withGlobalMiddlewares({
    requests,
    responses
}: {
    requests: any[],
    responses: any[]
}): Interceptors {
    const middlewares: Interceptors = {
        // every time we make an http request, this will run 1st before the request is made
        // url, path and route are supplied to the interceptor
        // request options can be modified and must be returned
        request: async ({ options, url, path, route }) => {
            const state = await applyQueueInSequence({ options, url, path, route }, [
                ...GlobalMiddlewares.request,
                ...requests
            ]);

            return state.options;
        },
        // every time we make an http request, before getting the response back, this will run
        response: async ({ response }) => {
            const state = await applyQueueInSequence({ response }, [
                ...GlobalMiddlewares.response,
                ...responses
            ]);

            return state.response;
        }
    }

    return middlewares
}
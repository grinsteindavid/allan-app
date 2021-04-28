import Auth from './auth';
import Logger from './logger';

const GlobalMiddlewares = {
    // every time we make an http request, this will run 1st before the request is made
    // url, path and route are supplied to the interceptor
    // request options can be modified and must be returned
    request: [
        Auth.request,
        Logger.request,
    ],
    // every time we make an http request, before getting the response back, this will run
    response: [
        Logger.response
    ]
}

export default GlobalMiddlewares
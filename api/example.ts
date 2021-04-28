import { CachePolicies, UseFetchArgs } from "use-http";
import urlBuilder from "utils/url/builder";
import withGlobalMiddlewares from "utils/middlewares/apply_global";
import DelayMiddleware from 'api/middlewares/delay';

export const NAMESPACE = 'example';

export function create(userID: string): UseFetchArgs {
    const url = `${NAMESPACE}/${userID}/create`

    return [
        url,
        {
            method: 'post',
            interceptors: withGlobalMiddlewares()
        }
    ]
}

export function remove(userID: string, id: string): UseFetchArgs {
    const url = `${NAMESPACE}/${userID}/${id}/remove`

    return [
        url,
        {
            method: 'post',
            interceptors: withGlobalMiddlewares()
        }
    ]
}

export function update(userID: string, id: string): UseFetchArgs {
    const url = `${NAMESPACE}/${userID}/${id}/update`

    return [
        url,
        {
            method: 'post',
            interceptors: withGlobalMiddlewares({
                responses: [DelayMiddleware.response]
            })
        }
    ]
}

export function search(name: string): UseFetchArgs {
    const url = urlBuilder({
        url: `${NAMESPACE}/search`,
        params: Boolean(name) ? { name } : undefined
    })

    return [
        url,
        {
            persist: true,
            cachePolicy: CachePolicies['CACHE_FIRST'],
            cache: 'default',
            method: 'get'
        }
    ]
}

export function get(userID: string, id?: string): UseFetchArgs {
    const url = `${NAMESPACE}/${userID}/get/${id}/data`

    return [
        url,
        {
            method: 'get',
        }
    ]
}
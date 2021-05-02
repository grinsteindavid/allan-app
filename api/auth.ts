import { UseFetchArgs } from "use-http";
import withGlobalMiddlewares from "utils/middlewares/apply_global";
import AuthMiddleware from 'api/middlewares/auth';

export const NAMESPACE = 'api';

export function login(): UseFetchArgs {
    const url = `${NAMESPACE}/login`

    return [
        url,
        {
            method: 'post',
            interceptors: withGlobalMiddlewares({
                responses: [AuthMiddleware.response]
            }),
        }
    ]
}

export function signUp(): UseFetchArgs {
    const url = `${NAMESPACE}/sign_up`

    return [
        url,
        {
            method: 'post',
            interceptors: withGlobalMiddlewares({
                responses: [AuthMiddleware.response]
            }),
        }
    ]
}
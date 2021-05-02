import React from 'react';
import { CachePolicies, Provider as HttpProvider } from 'use-http';
import { useGlobalContext } from 'context/global';
import withGlobalMiddlewares from 'utils/middlewares/apply_global';

export interface IProps {
    children: React.ReactNode
}

export default function HttpWrapper({
    children
}: IProps) {
    const { toggleAuthModal } = useGlobalContext()

    return (
        <HttpProvider
            url=''
            options={{
                persist: false,
                cache: 'no-cache',
                cachePolicy: CachePolicies['NO_CACHE'],
                cacheLife: 0,
                retries: 50,
                retryOn: async ({ attempt, error, response }) => {
                    // returns true or false to determine whether to retry
                    const shouldRetry = response?.status === 401

                    if (response?.status === 401) {
                        toggleAuthModal(true)
                    }

                    return shouldRetry
                },
                retryDelay: ({ attempt, error, response }) => {
                    // exponential backoff
                    const delay = Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)

                    return delay
                },
                interceptors: withGlobalMiddlewares()
            }}
        >
            {children}
        </HttpProvider>
    )
}
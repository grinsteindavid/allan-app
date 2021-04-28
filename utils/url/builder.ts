
import { isString, keys } from "lodash"

export default function urlBuilder({
    url,
    params,
}: {
    url: string,
    params?: { [key in string]: string | undefined }
}): string {
    let finalUrl = url

    if (params) {
        const queryString = buildQueryStringUrl({ queryStringUrl: finalUrl, params: params as any })

        finalUrl = `${finalUrl}?${queryString}`
    }

    return finalUrl
}

export function buildQueryStringUrl({
    queryStringUrl,
    params,
}: {
    queryStringUrl?: string,
    params: { [key in string]: string }
}): string {
    let urlSegments: string[] = []
    let urlHasParams = false

    if (queryStringUrl) {
        urlSegments = queryStringUrl.split('?')
        urlHasParams = urlSegments.length > 1
    }

    const queryString = new URLSearchParams(urlHasParams ? urlSegments[1] : '')

    keys(params).forEach(key => {
        if (isString(params[key])) {
            queryString.set(key, params[key] as string)
        }
    })

    return queryString.toString()
}
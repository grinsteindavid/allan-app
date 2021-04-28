export default {
    request: async ({ options, url, path, route }: any) => {
        console.log('LOGGER REQUEST', { options, url, path, route })

        return { options, url, path, route }
    },
    response: async ({ response }: any) => {
        console.log('LOGGER RESPONSE', { response })

        return { response }
    }
}
import sleep from "utils/promises/sleep"


export default {
    response: async ({ response }: any) => {
        await sleep(1)

        return { response }
    }
}
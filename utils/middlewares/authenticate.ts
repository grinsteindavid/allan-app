import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "node:querystring"


const authenticate = (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => {
    return new Promise<void>(async (resolve, reject) => {
        const { req, res } = ctx

        const token = req.headers.Authorization

        if (Boolean(token) === false) {
            reject()
        }

        resolve()
    })
}

export default authenticate
import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "node:querystring"
import Cookies from 'cookies';


const authenticate = (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => {
    return new Promise<void>(async (resolve, reject) => {
        const { req, res } = ctx
        const cookies = new Cookies(req, res)
        const token = cookies.get('token')

        if (Boolean(token) === false) {
            reject()
        }

        resolve()
    })
}

export default authenticate
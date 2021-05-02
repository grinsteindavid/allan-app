import { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";
import Cookies from 'cookies';

interface ExtendedRequest extends NextApiRequest {

}
interface ExtendedResponse extends NextApiResponse {

}

const handler = nc()
    .get<ExtendedRequest, ExtendedResponse>((req, res) => {
        const cookies = new Cookies(req, res)
        cookies.set('token', '', { maxAge: 0, expires: new Date() })

        res.status(200).json({ message: 'done' })
    })

export default handler

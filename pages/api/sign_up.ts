import { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";
import Cookies from 'cookies';

interface ExtendedRequest extends NextApiRequest {

}
interface ExtendedResponse extends NextApiResponse {

}

const handler = nc()
    .post<ExtendedRequest, ExtendedResponse>((req, res) => {
        const { email, password } = req.body
        const timestamp = (new Date()).getTime()

        if (email && password) {
            const cookies = new Cookies(req, res)
            cookies.set('token', String(timestamp))
            res.status(200).json({ user: { token: String(timestamp) } })
        } else {
            res.status(400).json({ message: 'email or password' })
        }
    })

export default handler

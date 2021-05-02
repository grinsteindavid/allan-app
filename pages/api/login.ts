import { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";

interface ExtendedRequest extends NextApiRequest {
	body: {
		email: string,
		password: string,
	}
}
interface ExtendedResponse extends NextApiResponse {

}

const handler = nc()
	.get<ExtendedRequest, ExtendedResponse>((req, res) => {
		const { email, password } = req.body
		const timestamp = (new Date()).getTime()

		if (email && password) {
			res.status(200).json({ token: String(timestamp) })
		} else {
			res.status(400).json({ message: 'email or password' })
		}
	})

export default handler

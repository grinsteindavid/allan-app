import HttpWrapper from 'components/wrappers/http'
import { GlobalProvider } from 'context/global'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
	return (
		<GlobalProvider>
			<HttpWrapper>
				<Component {...pageProps} />
			</HttpWrapper>
		</GlobalProvider>
	)
}

export default MyApp

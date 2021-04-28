import withErrorBoundary from 'components/error_boundaries'
import HttpWrapper from 'components/wrappers/http'
import { GlobalProvider } from 'context/global'
import { ThemeProvider } from "styled-components";
import defaultTheme from 'themes/default';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: any) {
	return (
		<GlobalProvider>
			<HttpWrapper>
				<ThemeProvider theme={defaultTheme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</HttpWrapper>
		</GlobalProvider>
	)
}

export default withErrorBoundary(MyApp)

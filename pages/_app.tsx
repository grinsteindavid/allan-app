import withErrorBoundary from 'components/error_boundaries'
import HttpWrapper from 'components/wrappers/http'
import { GlobalProvider } from 'context/global'
import { ThemeProvider } from "styled-components";
import defaultTheme from 'themes/default';
import 'styles/globals.scss';
import PageTransition from 'components/transitions/page';

function MyApp({
	Component,
	pageProps }:
	{
		Component: any,
		pageProps: { statusCode: number }
	}) {

	return (
		<GlobalProvider>
			<HttpWrapper>
				<ThemeProvider theme={defaultTheme}>
					<PageTransition>
						<Component {...pageProps} />
					</PageTransition>
				</ThemeProvider>
			</HttpWrapper>
		</GlobalProvider>
	)
}

export default withErrorBoundary(MyApp)

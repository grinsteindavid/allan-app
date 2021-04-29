import withErrorBoundary from 'components/error_boundaries'
import HttpWrapper from 'components/wrappers/http'
import { GlobalProvider } from 'context/global'
import { ThemeProvider } from "styled-components";
import defaultTheme from 'themes/default';
import 'styles/globals.scss';
import PageTransition from 'components/transitions/page';
import AdminMenu from 'components/menu';
import Container from 'components/container';

function MyApp({ Component, pageProps }: any) {
	return (
		<GlobalProvider>
			<HttpWrapper>
				<ThemeProvider theme={defaultTheme}>
					<PageTransition>
						<AdminMenu />
						<Container padding="0.5rem 1rem 0.5rem 17rem">
							<Component {...pageProps} />
						</Container>
					</PageTransition>
				</ThemeProvider>
			</HttpWrapper>
		</GlobalProvider>
	)
}

export default withErrorBoundary(MyApp)

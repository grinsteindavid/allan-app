import { GlobalProvider } from 'context/global'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp

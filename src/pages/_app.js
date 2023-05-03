import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import {SSRProvider} from "@react-aria/ssr"

function MyApp({ Component, pageProps }) {
  return (
    
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp

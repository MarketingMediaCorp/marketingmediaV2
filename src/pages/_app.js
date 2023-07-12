import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import {SSRProvider} from "@react-aria/ssr"
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    
    <SSRProvider>
     
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp

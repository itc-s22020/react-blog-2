import '@/styles/globals.css'
import Layout from '@/components/layout'

// Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App

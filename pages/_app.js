import '../styles/global.css'
import { createClient, Provider } from 'urql';

const client = createClient({ url: 'https://fleet-pigeon-38.hasura.app/v1/graphql' });

function MyApp({ Component, pageProps }) {

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

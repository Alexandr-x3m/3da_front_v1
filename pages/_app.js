import React from 'react'
import { createClient, Provider } from 'urql'

import '../styles/global.css'

const client = createClient({ url: 'https://fleet-pigeon-38.hasura.app/v1/graphql' });

function MyApp({ Component, pageProps }) {

  return (
    <React.StrictMode>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp

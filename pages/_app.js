import React from 'react'
import Page from '../components/Page'
// set NODE_OPTIONS=--openssl-legacy-provider && npm run dev
const MyApp = ({Component,pageProps}) => {
  return (
    <Page>
      <Component {...pageProps}/>
    </Page>
  )
}

export default MyApp
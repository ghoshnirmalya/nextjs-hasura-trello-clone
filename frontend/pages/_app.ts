import App from 'next/app'
import withNProgress from 'next-nprogress'

import '../static/styles/tailwind.css'

export default withNProgress(300, { showSpinner: false })(App)

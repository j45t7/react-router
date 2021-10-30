import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AllQuotes from './pages/AllQuotes'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const SingleQuote = React.lazy(() => import('./pages/SingleQuote'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route exact path='/'>
            <Redirect to='/quotes' />
          </Route>
          <Route exact path='/quotes'>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <SingleQuote />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App

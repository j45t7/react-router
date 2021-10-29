import { Switch, Route, Redirect } from 'react-router-dom'
import SingleQuote from './pages/SingleQuote'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
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
      </Switch>
    </Layout>
  )
}

export default App

import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John', text: 'Something something' },
  { id: 'q2', author: 'Ellen', text: 'Blah blah something' },
  { id: 'q3', author: 'Tom', text: 'Something blah blah' },
  { id: 'q4', author: 'Katie', text: 'Talking talking' },
]

const SingleQuote = () => {
  const params = useParams()
  const match = useRouteMatch()
  console.log(match)

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default SingleQuote

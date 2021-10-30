import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'

import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John', text: 'Something something' },
  { id: 'q2', author: 'Ellen', text: 'Blah blah something' },
  { id: 'q3', author: 'Tom', text: 'Something blah blah' },
  { id: 'q4', author: 'Katie', text: 'Talking talking' },
]

const SingleQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)
  const params = useParams()
  const match = useRouteMatch()
  console.log(match)
  const { quoteId } = params
  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p className='centered focused'>No quote found</p>
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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

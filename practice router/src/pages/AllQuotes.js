import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'John', text: 'Something something' },
  { id: 'q2', author: 'Ellen', text: 'Blah blah something' },
  { id: 'q3', author: 'Tom', text: 'Something blah blah' },
  { id: 'q4', author: 'Katie', text: 'Talking talking' },
]
const AllQuotes = () => {
  return (
    <div>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  )
}

export default AllQuotes

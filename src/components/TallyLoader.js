import 'whatwg-fetch'
import React, { useEffect, useState } from 'react'

const { fetch } = window

function fetchTally ({ doi, setTally, setError, retry = 0, maxRetries = 8 } = {}) {
  const fetchFailed = new Error('Failed to get Tally')
  fetch(`https://api.scite.ai/tallies/${doi}`)
    .then(response => {
      if (response.status === 404) {
        // Then we will set a 0 tally
        setTally({
          doi,
          total: 0
        })

        return {}
      }

      if (!response.ok) {
        throw fetchFailed
      }

      return response.json()
    })
    .then(tally => {
      if (typeof tally.total === 'number') {
        setTally(tally)
      }
    })
    .catch(e => {
      if (e === fetchFailed && retry < maxRetries) {
        return setTimeout(() => fetchTally({retry: ++retry, doi, setTally, setError, maxRetries}), 1200)
      }

      setError(e)
    })
}

function fetchNotices ({ doi, setNotices, setError, retry = 0, maxRetries = 8 } = {}) {
  const fetchFailed = new Error('Failed to get notices')
  fetch(`https://api.scite.ai/papers/${doi}`)
    .then(response => {
      if (response.status === 404) {
        // Then we will set a notices to []
        setNotices([])

        return {}
      }

      if (!response.ok) {
        throw fetchFailed
      }

      return response.json()
    })
    .then(({ editorialNotices }) => {
      setNotices(editorialNotices)
    })
    .catch(e => {
      if (e === fetchFailed && retry < maxRetries) {
        return setTimeout(() => fetchNotices({retry: ++retry, doi, maxRetries, setError, setNotices}), 1200)
      }

      setError(e)
    })
}

export const TallyLoader = ({ doi, children }) => {
  const [tally, setTally] = useState(null)
  const [notices, setNotices] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchTally({ doi, setTally, setError })
    fetchNotices({ doi, setNotices, setError })
  }, [doi])

  return children({ tally, notices, error })
}

export default TallyLoader

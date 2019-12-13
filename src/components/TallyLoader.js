import 'whatwg-fetch'
import React, { useEffect, useState } from 'react'

const { fetch } = window

function fetchReport ({ doi, setTally, setError, retry = 0, maxRetries = 8 } = {}) {
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
        return setTimeout(() => this.fetchReport(++retry, maxRetries), 1200)
      }

      setError(e)
    })
}

export const TallyLoader = ({ doi, children }) => {
  const [tally, setTally] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => fetchReport({ doi, setTally, setError }), [doi])

  return children({ tally, error })
}

export default TallyLoader

import React, { Component } from 'react'
import qs from 'query-string'
import classNames from 'classnames'
import Count from './Count'

import styles from '../styles/Tally.css'

const RETRACTED_LEMMAS = ['retract', 'withdraw', 'remove']

const noticesFilter = status => {
  for (const retractedLemma of RETRACTED_LEMMAS) {
    if (status && status.toLowerCase().includes(retractedLemma)) {
      return false
    }
  }
  return true
}

const retractionFilter = status => {
  for (const retractedLemma of RETRACTED_LEMMAS) {
    if (status && status.toLowerCase().includes(retractedLemma)) {
      return true
    }
  }
  return false
}

class Tally extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  get queryString () {
    const { source, isBadge, campaign } = this.props

    const params = {
      utm_medium: isBadge ? 'badge' : 'plugin',
      utm_source: source || 'generic',
      utm_campaign: campaign || isBadge ? 'badge' : 'plugin'
    }

    return qs.stringify(params)
  }

  handleClick () {
    const { tally: { doi } } = this.props
    window.open(`https://scite.ai/reports/${doi}?${this.queryString}`)
  }

  render () {
    const { horizontal, showZero, showLabels, tally, notices, small = false } = this.props
    const classes = {
      tally: classNames('scite-tally', styles.tally, {
        [styles.horizontal]: horizontal,
        [styles.small]: small && horizontal,
        [styles.show]: showZero ? tally : tally && (tally.total > 0 || tally.citingPublications > 0)
      })
    }
    const citingPublications = (tally && tally.citingPublications && tally.citingPublications.toLocaleString()) || 0
    const supporting = (tally && tally.supporting && tally.supporting.toLocaleString()) || 0
    const contrasting = (tally && tally.contradicting && tally.contradicting.toLocaleString()) || 0
    const mentioning = (tally && tally.mentioning && tally.mentioning.toLocaleString()) || 0

    const retractionNotices = (notices && notices.length > 0 && notices.filter(retractionFilter)) || []
    const editorialNotices = (notices && notices.length > 0 && notices.filter(noticesFilter)) || []
    const retractionsCount = retractionNotices.length.toLocaleString() || 0
    const noticeCount = editorialNotices.length.toLocaleString() || 0

    return (
      <div
        className={classes.tally}
        onClick={this.handleClick}
      >
        {!horizontal && (
          <img
            className={classNames(styles.logo, {
              [styles.logoSmall]: small
            })} src='https://cdn.scite.ai/assets/images/logo.svg'
          />
        )}
        <Count type='publications' count={citingPublications} horizontal={horizontal} showLabels={showLabels} small={small} />
        <Count type='supporting' count={supporting} horizontal={horizontal} showLabels={showLabels} small={small} />
        <Count type='mentioning' count={mentioning} horizontal={horizontal} showLabels={showLabels} small={small} />
        <Count type='contrasting' count={contrasting} horizontal={horizontal} showLabels={showLabels} small={small} />
        {retractionsCount > 0 && <Count type='retractions' count={retractionsCount} horizontal={horizontal} showLabels={showLabels} small={small} />}
        {noticeCount > 0 && <Count type='notices' count={noticeCount} horizontal={horizontal} showLabels={showLabels} small={small} />}
      </div>
    )
  }
}

Tally.defaultProps = {
  horizontal: false,
  isBadge: false,
  showZero: true
}

export default Tally

import React, { Component } from 'react'
import qs from 'query-string'
import classNames from 'classnames'
import Count from './Count'

import styles from '../styles/Tally.css'

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
      utm_campaign: campaign || 'badge_generic'
    }

    return qs.stringify(params)
  }

  handleClick () {
    const { tally: { doi } } = this.props
    window.open(`https://scite.ai/reports/${doi}?${this.queryString}`)
  }

  render () {
    const { horizontal, showZero, showLabels, tally } = this.props
    const classes = {
      tally: classNames('scite-tally', styles.tally, {
        [styles.horizontal]: horizontal,
        [styles.show]: showZero ? tally : tally && tally.total > 0
      })
    }
    const supporting = (tally && tally.supporting) || 0
    const disputing = (tally && tally.contradicting) || 0
    const mentioning = (tally && tally.mentioning) || 0

    return (
      <div
        className={classes.tally}
        onClick={this.handleClick}
      >
        {!horizontal && <img className={styles.logo} src='https://cdn.scite.ai/assets/images/logo.svg' />}

        <Count type='supporting' count={supporting} horizontal={horizontal} showLabels={showLabels} />
        <Count type='mentioning' count={mentioning} horizontal={horizontal} showLabels={showLabels} />
        <Count type='disputing' count={disputing} horizontal={horizontal} showLabels={showLabels} />
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

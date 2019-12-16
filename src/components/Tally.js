import '../styles/Tally.css'

import React, { Component } from 'react'
import qs from 'query-string'
import classNames from 'classnames'
import Count from './Count'
import TextLogo from './TextLogo'
const { fetch } = window

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
    const { horizontal, showZero, tally } = this.props
    const classes = {
      tally: classNames('scite-tally', {
        '-horizontal': horizontal,
        '-show': showZero ? tally : tally && tally.total > 0
      })
    }
    const supporting = (tally && tally.supporting) || 0
    const contradicting = (tally && tally.contradicting) || 0
    const mentioning = (tally && tally.mentioning) || 0

    return (
      <div
        className={classes.tally}
        onClick={this.handleClick}
      >
        {!horizontal && <TextLogo />}

        <Count type='supporting' count={supporting} horizontal={horizontal} />
        <Count type='mentioning' count={mentioning} horizontal={horizontal} />
        <Count type='contradicting' count={contradicting} horizontal={horizontal} />
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

import React from 'react'
import qs from 'query-string'
import classNames from 'classnames'
import SectionTallyCount from './SectionTallyCount'

import styles from '../styles/SectionTally.css'

const SectionTally = ({
  source, campaign, autologin, rewardfulID,
  tally, forceCollapse, showLabels,
  small = false, horizontal = false, isBadge = false, showZero = true,
  showBarChart = true
}) => {
  const params = {
    utm_medium: isBadge ? 'badge' : 'plugin',
    utm_source: source || 'generic',
    utm_campaign: campaign || isBadge ? 'badge' : 'plugin'
  }

  if (autologin) {
    params.autologin = autologin
  }

  if (rewardfulID) {
    params.via = rewardfulID
  }

  const queryString = qs.stringify(params)

  const classes = {
    sectionTally: classNames('scite-section-tally', styles.tally, {
      [styles.horizontal]: horizontal,
      [styles.small]: small && horizontal,
      [styles.show]: showZero ? tally : tally && (tally.total > 0),
      [styles.forceCollapse]: forceCollapse && tally.total === 0,
      [styles.badgeTally]: isBadge
    })
  }

  const introduction = (tally && tally.introduction && tally.introduction.toLocaleString()) || 0
  const methods = (tally && tally.methods && tally.methods.toLocaleString()) || 0
  const results = (tally && tally.results && tally.results.toLocaleString()) || 0
  const discussion = (tally && tally.discussion && tally.discussion.toLocaleString()) || 0
  const other = (tally && tally.other && tally.other.toLocaleString()) || 0

  const reportLink = `https://scite.ai/reports/${tally && tally.doi}?${queryString}`
  const handleClick = () => {
    window.open(reportLink)
  }

  return (
    <div
      className={styles.sectionTallyWidget}
    >
        {!horizontal && (
          <img
            className={classNames(styles.logo, {
              [styles.logoSmall]: small
            })}
            src='https://cdn.scite.ai/assets/images/logo.svg'
          />
        )}
        <div
          onClick={handleClick}
          className={styles.sectionTallyWrapper}
        >
          {showBarChart && (
            <div>
              <img src='https://chartio.com/assets/24e451/tutorials/charts/grouped-bar-charts/c1fde6017511bbef7ba9bb245a113c07f8ff32173a7c0d742a4e1eac1930a3c5/grouped-bar-example-1.png' />
              <a href={reportLink} target='_blank'>View more details</a>
            </div>
          )}
          <div
            className={classes.sectionTally}
          >
            <SectionTallyCount type='introduction' count={introduction} horizontal={horizontal} showLabels={showLabels} small={small} />
            <SectionTallyCount type='methods' count={methods} horizontal={horizontal} showLabels={showLabels} small={small} />
            <SectionTallyCount type='results' count={results} horizontal={horizontal} showLabels={showLabels} small={small} />
            <SectionTallyCount type='discussion' count={discussion} horizontal={horizontal} showLabels={showLabels} small={small} />
            <SectionTallyCount type='other' count={other} horizontal={horizontal} showLabels={showLabels} small={small} />
          </div>
        </div>
    </div>
  )
}

export default SectionTally

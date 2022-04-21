import React from 'react'
import qs from 'query-string'
import classNames from 'classnames'
import SectionTallyCount from './SectionTallyCount'

import styles from '../styles/SectionTally.css'
import { Cell, PieChart, Pie } from 'recharts'
import BarChart from './BarChart'
import { generateChartDataFromSectionTally } from '../util/sectionTally'

const SectionTally = ({
  source, campaign, autologin, rewardfulID,
  tally, forceCollapse, showLabels,
  small = false, horizontal = false, isBadge = false, showZero = true,
  showBarChart = false, showPieChart = false, showLogo = true
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

  const chartData = generateChartDataFromSectionTally(tally)
  const showChart = showBarChart || showPieChart

  return (
    <div
      className={styles.sectionTallyWidget}
    >
      {(!horizontal && showLogo) && (
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
          <BarChart chartWidth={180} chartHeight={140} data={chartData} />
        )}

        {showPieChart && (
          <PieChart width={180} height={140}>
            <Pie data={chartData} isAnimationActive={false} animationDuration={0}>
              {
                chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))
              }
            </Pie>
          </PieChart>
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

      {showChart && (
        <div className={styles.chartSubheading}>
          <span className={styles.chartLabel}>Sections</span>
          <a href={reportLink} target='_blank' rel='noopener noreferrer'>See more details</a>
        </div>
      )}
    </div>
  )
}

export default SectionTally

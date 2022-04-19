import React from 'react'
import classNames from 'classnames'
import SectionIcon from './SectionIcon'
import styles from '../styles/Count.css'


const renderSectionType = (type) => {
  if (type === 'introduction') {
    return 'Intro'
  }
  return type
}

export const SectionTallyCount = ({ className, horizontal, type, count, showLabels = false, small = false }) => (
  <div
    className={
      classNames(styles.count, className, {
        [styles.horizontal]: horizontal,
        [styles.small]: small
      })
    }
  >
    <div
      className={
        classNames(styles.iconCountWrapper, {
          [styles.expandedIconCount]: !showLabels
        })
      }
    >
      <SectionIcon type={type} small />

      {showLabels &&
        <span className={classNames(styles.label, {
          [styles.smallLabel]: small
        })}
        >
          {renderSectionType(type)}
        </span>}

      <span className={classNames(styles.number, {
        [styles.smallNumber]: small
      })}
      >
        {count}
      </span>
    </div>
  </div>
)

export default SectionTallyCount
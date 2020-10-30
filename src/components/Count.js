import React from 'react'
import classNames from 'classnames'
import Icon from './Icon'
import styles from '../styles/Count.css'

export const Count = ({ className, horizontal, type, count, showLabels = false }) => (
  <div
    className={
      classNames(styles.count, className, {
        [styles.horizontal]: horizontal
      })
    }
  >
    {showLabels &&
      <span className={styles.label}>{type}</span>}

    <div
      className={
        classNames(styles.iconCountWrapper, {
          [styles.expandedIconCount]: !showLabels
        })
      }
    >
      <Icon type={type} />
      <span className={styles.number}>{count}</span>
    </div>
  </div>
)

export default Count

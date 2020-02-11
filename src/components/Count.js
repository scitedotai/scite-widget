import React from 'react'
import classNames from 'classnames'
import Icon from './Icon'
import styles from '../styles/Count.css'

export const Count = ({ className, horizontal, type, count }) => (
  <div
    className={
      classNames(styles.count, className, {
        [styles.horizontal]: horizontal
      })
    }
  >
    <Icon type={type} />
    <span className={styles.number}>{count}</span>
  </div>
)

export default Count

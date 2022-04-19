import React from 'react'
import classNames from 'classnames'
import styles from '../styles/SectionIcon.css'

export const SectionIcon = ({ type, small = false }) => (
  <i className={classNames(styles.icon, styles[type], {
    [styles.smallIcon]: small
  })}
  />
)

export default SectionIcon

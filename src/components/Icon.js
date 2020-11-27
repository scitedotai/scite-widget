import React from 'react'
import classNames from 'classnames'
import styles from '../styles/Icon.css'

export const Icon = ({ type, small }) => (
  <i className={classNames(styles.icon, styles[type], {
    [styles.smallIcon]: small
  })}
  />
)

export default Icon

import React from 'react'
import classNames from 'classnames'
import styles from '../styles/Icon.css'

export const Icon = ({ type }) => (
  <i className={classNames(styles.icon, styles[type])} />
)

export default Icon

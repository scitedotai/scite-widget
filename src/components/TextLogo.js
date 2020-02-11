import React from 'react'
import classNames from 'classnames'
import styles from '../styles/TextLogo.css'

export const TextLogo = ({ className }) =>
  <span className={classNames(styles.textLogo, className)}>scite_</span>

export default TextLogo

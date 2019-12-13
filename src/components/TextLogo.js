import React from 'react'
import classNames from 'classnames'
import '../styles/TextLogo.css'

export const TextLogo = ({ className }) =>
  <span className={classNames('scite-text-logo', className)}>scite_</span>

export default TextLogo

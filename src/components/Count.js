import React from 'react'
import classNames from 'classnames'
import '../styles/Count.css'

const iconClasses = type => `scite-icon scite-icon-${type}`
export const Count = ({ className, horizontal, type, count }) => (
  <div
    className={
      classNames('scite-tally-count', className, {
        '-horizontal': horizontal
      })
    }
  >
    <i className={iconClasses(type)} />
    <span className='number'>{count}</span>
  </div>
)

export default Count

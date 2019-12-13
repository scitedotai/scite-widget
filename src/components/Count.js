import React from 'react'
import classNames from 'classnames'

const iconClasses = type => `scite-icon scite-icon-${type}`
export const Count = ({ horizontal, type, count }) => (
  <div
    className={
      classNames('scite-tally-count', {
        '-horizontal': horizontal
      })
    }
  >
    <i className={iconClasses(type)} />
    <span className='number'>{count}</span>
  </div>
)

export default Count

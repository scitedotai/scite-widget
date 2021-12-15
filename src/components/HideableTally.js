import React, { useState } from 'react'

import styles from '../styles/HideableTally.css'
import Icon from './Icon'

const HideableTally = ({
  children
}) => {
  const [show, setShow] = useState(true)

  return (
    <div className={styles.tally}>
      {show ? (
        <>
          {children}
          <div className={styles.hideContainer} onClick={() => setShow(!show)}>
            <div className={styles.openingArrow}><Icon type='openingArrow' /></div>
            <div>hide</div>
          </div>
        </>
      ) : (
        <div className={styles.logoContainer} onClick={() => setShow(!show)}>
          <div className={styles.closingArrow}>
            <Icon type='closingCaret' />
          </div>
          <img
            className={styles.logoSingleLetter}
            src='https://cdn.scite.ai/assets/images/scite_single_letter.svg'
          />
        </div>
      )}
    </div>
  )
}

export default HideableTally

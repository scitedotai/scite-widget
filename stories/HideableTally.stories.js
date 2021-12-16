import React from 'react'

import { Tally } from '../src'
import HideableTally from '../src/components/HideableTally'

export default {
  title: 'HideableTally',
  component: HideableTally
}

const tally = {
  citingPublications: 3,
  supporting: 1,
  contradicting: 2,
  mentioning: 0
}

const Template = (args) => (
  <div style={{ borderRadius: '8px', border: '1px solid #cfcfcf', height: 'min-content', width: 'min-content', padding: '0.25rem' }}>
    <HideableTally>
      <Tally
        tally={tally}
        notices={['retracted', 'Has correction']}
        {...args}
      />
    </HideableTally>
  </div>)

export const Basic = Template.bind({})

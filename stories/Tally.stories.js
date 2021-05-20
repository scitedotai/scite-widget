import React from 'react'

import { Tally } from '../src'

export default {
  title: 'Tally',
  component: Tally
}

const tally = {
  citingPublications: 3,
  supporting: 1,
  contradicting: 2,
  mentioning: 0
}

const Template = (args) => (
  <div style={{ borderRadius: '8px', border: '1px solid #cfcfcf', height: 'min-content', width: 'min-content', padding: '0.25rem' }}>
    <Tally
      tally={tally}
      notices={['retracted', 'Has correction']}
      {...args}
    />
  </div>)

export const Basic = Template.bind({})
export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true
}
export const ShowZero = Template.bind({})
ShowZero.args = {
  showZero: true
}
export const ShowLabels = Template.bind({})
ShowLabels.args = {
  showLabels: true
}
export const Small = Template.bind({})
Small.args = {
  small: true
}
export const SmallLabels = Template.bind({})
SmallLabels.args = {
  small: true,
  showLabels: true
}
export const SmallHorizontal = Template.bind({})
SmallHorizontal.args = {
  horizontal: true,
  small: true
}

export const SmallHorizontalLabels = Template.bind({})
SmallHorizontalLabels.args = {
  horizontal: true,
  small: true,
  showLabels: true
}

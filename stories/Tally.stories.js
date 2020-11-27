import React from 'react'

import { Tally } from '../src'

export default {
  title: 'Tally',
  component: Tally
}

const tally = {
  supporting: 1,
  contradicting: 2,
  mentioning: 0
}

const Template = (args) => (
  <div style={{ borderRadius: '8px', border: '1px solid #cfcfcf', minHeight: '0px', maxHeight: '32px' }}>
    <Tally
      tally={tally}
      notices={[{ status: 'retracted' }]}
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

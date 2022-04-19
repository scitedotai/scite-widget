import React from 'react'

import { SectionTally } from '../src'

export default {
  title: 'SectionTally',
  component: SectionTally
}

const tally = {
    total: 4749,
    introduction: 1555,
    results: 166,
    methods: 81,
    discussion: 1063,
    other: 1409,
    doi: "10.1136/bmj.321.7258.405"
}

const Template = (args) => (
  <div style={{ borderRadius: '8px', border: '1px solid #cfcfcf', height: 'min-content', width: 'min-content', padding: '0.25rem' }}>
    <SectionTally
      tally={tally}
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

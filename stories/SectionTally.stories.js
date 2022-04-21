import React from 'react'

import { SectionTally } from '../src'
import { CHART_TYPES } from '../src/util/sectionTally'

export default {
  title: 'SectionTally',
  component: SectionTally
}

const tally = {
  total: 342,
  introduction: 90,
  results: 8,
  methods: 13,
  discussion: 98,
  other: 108,
  doi: '10.1016/j.biopsych.2005.08.012'
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

export const SectionTallyWithBarChart = Template.bind({})
SectionTallyWithBarChart.args = {
  showLabels: true,
  chartType: CHART_TYPES.BAR
}

export const SectionTallyWithPieChart = Template.bind({})
SectionTallyWithPieChart.args = {
  showLabels: true,
  chartType: CHART_TYPES.PIE
}

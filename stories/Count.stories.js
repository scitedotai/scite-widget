import React from 'react'

import { Count } from '../src'

export default {
  title: 'Count',
  component: Count
}

const Template = (args) => (
  <>
    <Count type='supporting' count={50} {...args} />
    <Count type='mentioning' count={50} {...args} />
    <Count type='disputing' count={50} {...args} />
    <Count type='notices' {...args} />
  </>)

export const Basic = Template.bind({})

export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true
}

export const ShowLabels = Template.bind({})
ShowLabels.args = {
  showLabels: true
}

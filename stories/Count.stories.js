import React from 'react'

import { Count } from '../src'

export default {
  title: 'Count',
  component: Count
}

const Template = (args) => (
  <>
    <Count type='publications' count={50000} {...args} />
    <Count type='supporting' count={5000} {...args} />
    <Count type='mentioning' count={500} {...args} />
    <Count type='contrasting' count={50} {...args} />
    <Count type='retractions' count={3} {...args} />
    <Count type='notices' count={3} {...args} />
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

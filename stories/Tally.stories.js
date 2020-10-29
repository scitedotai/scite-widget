import React from 'react';

import { Tally } from '../src';

export default {
  title: 'Tally',
  component: Tally,
};

const tally = {
  supporting: 1,
  contradicting: 2,
  mentioning: 0,
}

const Template = (args) => <Tally
  tally={tally}
  notices={[{'status': 'retracted'}]}
  {...args}
/>;


export const Basic = Template.bind({});
export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true
}
export const ShowZero = Template.bind({});
ShowZero.args = {
  showZero: true
}
export const ShowLabels = Template.bind({});
ShowLabels.args = {
  showLabels: true
}

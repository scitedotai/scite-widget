import React from 'react';

import { TallyLoader, Tally } from '../src';

export default {
  title: 'TallyLoader',
  component: TallyLoader,
};

const Template = (args) => <TallyLoader {...args}>
    {({ tally, notices }) => <Tally tally={tally} notices={notices} />}
  </TallyLoader>;

export const TallyLoaded = Template.bind({});
TallyLoaded.args = {
  doi: '10.1016/j.biopsych.2005.08.012'
}
export const TallyLoadedRetractionNotice = Template.bind({});
TallyLoadedRetractionNotice.args = {
  doi: '10.1371/journal.ppat.0020025'
}

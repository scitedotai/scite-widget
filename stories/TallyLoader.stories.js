import React from 'react';

import { TallyLoader, Tally } from '../src';

export default {
  title: 'TallyLoader',
  component: TallyLoader,
};

const Template = (args) => <TallyLoader doi='10.1016/j.biopsych.2005.08.012'>
    {({ tally }) => <Tally tally={tally} />}
  </TallyLoader>;

export const TallyLoaded = Template.bind({});

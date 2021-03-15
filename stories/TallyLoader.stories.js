import React from 'react'

import { TallyLoader, Tally } from '../src'

export default {
  title: 'TallyLoader',
  component: TallyLoader
}

const Template = (args) => (
  <TallyLoader {...args}>
    {({ tally, notices }) => <Tally tally={tally} notices={notices} />}
  </TallyLoader>)

export const TallyLoaded = Template.bind({})
TallyLoaded.args = {
  doi: '10.1016/j.biopsych.2005.08.012'
}

export const TallyLoadedRetractionNotice = Template.bind({})
TallyLoadedRetractionNotice.args = {
  doi: '10.1038/nature10167'
}

export const TallyLoadedRetraction = Template.bind({})
TallyLoadedRetraction.args = {
  doi: '10.1002/art.10305'
}

export const TallyLoadedNotice = Template.bind({})
TallyLoadedNotice.args = {
  doi: '10.1371/journal.pone.0158201'
}

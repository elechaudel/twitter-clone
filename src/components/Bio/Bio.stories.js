import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
    <Bio
        headshot="https://pbs.twimg.com/profile_images/970679624198971393/U9q4SH11_400x400.jpg"
        name="Colby Fayock"
        tagline="Helping others to learn by doing!"
        role="Designer Advocate @ Applitools"
    />
);

export const Default = Template.bind({});
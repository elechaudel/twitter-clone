import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
    <Post
        content="I'm working on Figma." 
        date="2/26/2021"
    />
);

export const Default = Template.bind({});
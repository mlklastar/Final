import React from 'react';
import  Name from './Name';

export default {
    component: Name,
    title: 'component/header/Name'
};

const Template = (args) => <Name {...args} />

export  const Default = Template.bind({});

Default.args = {
   
}

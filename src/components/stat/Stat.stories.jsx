import React from 'react';
import  Stat from './Stat';

export default {
    component: Stat,
    title: 'component/stat/Stat'
};

const Template = (args) => <Stat {...args} />

export  const Default = Template.bind({});

Default.args = {
    list:[],
}
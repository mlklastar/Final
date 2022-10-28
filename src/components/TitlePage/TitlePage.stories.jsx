import React from 'react';
import  TitlePage from './TitlePage';

export default {
    component: TitlePage,
    title: 'component/TitlePage/TitlePage'
};

const Template = (args) => <TitlePage {...args} />

export  const Default = Template.bind({});

Default.args = {
    title: 'Choisissez un sport',
    
}

export  const Team = Template.bind({});

Team.args = {
    title: 'Choisissez une team',
    
}
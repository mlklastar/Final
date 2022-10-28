import React from 'react';
import  Sport from './Sport';

export default {
    component: Sport,
    title: 'component/sport/sport/Sport'
};

const Template = (args) => <Sport {...args} />

export  const Default = Template.bind({});

Default.args = {
   name:"football",
   link:"https://img.freepik.com/vecteurs-premium/football-football-logo-vecteur_7888-111.jpg?w=2000"
}




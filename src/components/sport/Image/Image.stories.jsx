import React from 'react';
import  Image from './Image';

export default {
    component: Image,
    title: 'component/sport/image/Image'
};

const Template = (args) => <Image {...args} />

export  const Default = Template.bind({});

Default.args = {
   link:"https://img.freepik.com/vecteurs-premium/football-football-logo-vecteur_7888-111.jpg?w=2000"
}


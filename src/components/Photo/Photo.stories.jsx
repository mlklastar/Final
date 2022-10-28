import React from 'react';
import  Photo from './Photo';

export default {
    component: Photo,
    title: 'component/Photo/Photo'
};

const Template = (args) => <Photo {...args} />

export  const Default = Template.bind({});

Default.args = {
   flou:false,
   src:"https://tipsscore.com/resb/player/jamal-lewis.png",
}

export  const Flou = Template.bind({});

Flou.args = {
   flou:true,
   src:"https://tipsscore.com/resb/player/jamal-lewis.png",
}


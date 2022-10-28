import React from 'react';
import  Formulaire from './Formulaire';

export default {
    component: Formulaire,
    title: 'component/formulaire/Formulaire'
};

const Template = (args) => <Formulaire {...args} />

export  const Default = Template.bind({});

Default.args = {
    s:"Envoyer",
}

export  const Loading = Template.bind({});

Loading.args = {
    s:"En attente",
}


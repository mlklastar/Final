import React from 'react';
import  Bouton from './Bouton';

export default {
    component: Bouton,
    title: 'component/Bouton/Bouton'
};

const Template = (args) => <Bouton {...args} />

export  const Default = Template.bind({});

Default.args = {
    text: 'Malik',
    disable: false,
    color: "red",
    loading: false,
}

export const MalikDisabled = Template.bind({});

MalikDisabled.args = {
    text: 'Malik',
    disable: true,
    color: "red",
    loading: false,
}

export const JoeurDisabled = Template.bind({});

JoeurDisabled.args = {
    text: 'Joueur',
    disable: true,
    color: "yellow",
    loading:false,
}

export const Joueur = Template.bind({});

Joueur.args = {
    text: 'Joueur',
    disable: false,
    color: "Yellow",
    loading:false,
}

export const Loading = Template.bind({});

Loading.args = {
    text: 'Joueur',
    disable: false,
    color: "Yellow",
    loading:true,
}


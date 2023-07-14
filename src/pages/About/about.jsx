import React from 'react';
import logo from "../../assets/background.jpeg";
import "./about.sass";
import Dropdown from '../../components/dropdown/Dropdown';

function About() {
  const aboutDropdownOptions = [
    { title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', text: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.` },
  ];

  return (
    <div className="about-page">
      <div className="banner">
        <img src={logo} alt="PAYSAGE" />
      </div>
      <div className='about-dropdown-container'>
        <Dropdown content={aboutDropdownOptions[0]} className='about-dropdown' />
        <Dropdown content={aboutDropdownOptions[1]} className='about-dropdown' />
        <Dropdown content={aboutDropdownOptions[2]} className='about-dropdown' />
        <Dropdown content={aboutDropdownOptions[3]} className='about-dropdown' />
      </div>
    </div>
  );
}

export default About;

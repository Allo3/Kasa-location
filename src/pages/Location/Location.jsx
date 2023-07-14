import React from 'react';
import { useParams } from 'react-router-dom';
import './Location.sass'
import Dropdown from '../../components/dropdown/Dropdown';
import BackgroundImage from '../../components/locationComponents/Carousel/Carousel';
import LocationModule from '../../components/locationComponents/Host/Host';
import ErrorPage from "../Error/Error";

function LocationPage({ logements }) {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div>
      <BackgroundImage images={logement.pictures} />
      <LocationModule
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <div className='location-dropdown-container'>
        <Dropdown className='location-dropdown' content={{ title: 'Description', text: logement.description }} />
        <Dropdown className='location-dropdown' content={{ title: 'Équipements', text: logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>) }} />
        </div>
    </div>
  );
}

export default LocationPage;

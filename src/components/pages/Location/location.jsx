import React from 'react';
import { useParams } from 'react-router-dom';
import DropDown from '../../dropdown/Dropdown';
import BackgroundImage from '../../locationComponents/locationBackground/backgroundImage';
import LocationModule from '../../locationComponents/locationTitle/locationTitle';
import ErrorPage from "../../error/Error";

function LocationPage({ logements }) {
    const { id } = useParams();

    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <ErrorPage/>;
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
            <DropDown logement={logement} />
        </div>
    );
}

export default LocationPage;

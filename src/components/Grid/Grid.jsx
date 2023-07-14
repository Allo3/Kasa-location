import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Grid.sass';

function LocationGrid({ logements }) {
    const [afficherPlus, setAfficherPlus] = useState(6);

    return (
        <div className="test">
            <div className="grid-container">
                <div className="location-grid">
                    {logements.slice(0, afficherPlus).map((logement) => (
                        <Link className='location' key={logement.id} to={`/location/${logement.id}`}>
                            <div className="location-item">
                                <img src={logement.cover} alt={logement.title} />
                                <div className="location-title">{logement.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="afficher-plus">
                {afficherPlus < logements.length && (
                    <button onClick={() => setAfficherPlus(afficherPlus + 6)}>
                        Afficher plus
                    </button>
                )}
            </div>
        </div>
    );
}

export default LocationGrid;
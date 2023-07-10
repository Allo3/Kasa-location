import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutDropdown() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const handleOpen1 = () => {
        setOpen1(!open1);
    }
    const handleOpen2 = () => {
        setOpen2(!open2);
    }
    const handleOpen3 = () => {
        setOpen3(!open3);
    }
    const handleOpen4 = () => {
        setOpen4(!open4);
    }

    return (
        <DropdownContainer>
            <DropdownBox>
                <TitleBox className={open1 ? 'open' : ''} onClick={handleOpen1}>
                    Fiiabilité
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open1 ? 'open' : ''}>
                    <MenuItem>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</MenuItem>
                </Menu>
            </DropdownBox>
            <DropdownBox>
                <TitleBox className={open2 ? 'open' : ''} onClick={handleOpen2}>
                    Respect
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open2 ? 'open' : ''}>
                    <MenuItem>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</MenuItem>
                </Menu>
            </DropdownBox>
            <DropdownBox>
                <TitleBox className={open3 ? 'open' : ''} onClick={handleOpen3}>
                    Service
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open3 ? 'open' : ''}>
                    <MenuItem>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</MenuItem>
                </Menu>
            </DropdownBox>
            <DropdownBox>
                <TitleBox className={open4 ? 'open' : ''} onClick={handleOpen4}>
                    Sécurité
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open4 ? 'open' : ''}>
                    <MenuItem>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</MenuItem>
                </Menu>
            </DropdownBox>
        </DropdownContainer>
    );
}

const DropdownContainer = styled.div`
  margin: 50px auto auto auto;
  width: 71.04%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const DropdownBox = styled.div`
  width: 90%;
  margin: auto
`;

const UpArrow = styled.span`
  font-size: 32px;
  width: 32px;
  margin-right: 5px;
  transform-origin: center center;
  transition: transform 0.5s ease;
`;

const TitleBox = styled.button`
  position: relative;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6060;
  width: 100%;
  height: 52px;
  color: white;
  text-align: left;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;

  &.open .arrow {
    transform: rotate(-180deg);
  }
  @media screen and (max-width: 480px) { 
    width: 50% !important
    height: 30px
    font-size: 13px;
    font-style: normal;
    ligne-height: 142.6%
  }
`;

const Menu = styled.ul`
  margin-top: 0;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 20px;
  list-style-type: none;
  background-color: #f6f6f6;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  color: #ff6060;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.2s ease, opacity 0.5s ease;

  &.open {
    max-height: 100%;
    height: auto;
    opacity: 1;
  }
  @media screen and (max-width: 480px) { 
    height: 100% !important;
  }
`;

const MenuItem = styled.li`
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
  width: 95%;
`;

export default AboutDropdown;

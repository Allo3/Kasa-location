import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDown = ({ logement }) => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleOpen1 = () => {
        setOpen1(!open1);
    };

    const handleOpen2 = () => {
        setOpen2(!open2);
    };

    return (
        <DropdownContainer>
            <DropdownBox>
                <TitleBox className={open2 ? 'collapse open' : 'collapse'} onClick={handleOpen2}>
                    Description
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open2 ? 'collapse open' : 'collapse'}>
                    <MenuItem>{logement?.description}</MenuItem>
                    {/* Ajoutez les autres éléments du menu ici */}
                </Menu>
            </DropdownBox>
            <DropdownBox>
                <TitleBox className={open1 ? 'collapse open' : 'collapse'} onClick={handleOpen1}>
                    Équipements
                    <UpArrow className="arrow">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </UpArrow>
                </TitleBox>
                <Menu className={open1 ? 'collapse open' : 'collapse'}>
                    {logement?.equipments.map((equipment, index) => (
                        <MenuItem key={index}>{equipment}</MenuItem>
                    ))}
                </Menu>
            </DropdownBox>
        </DropdownContainer>
    );
};


const DropdownContainer = styled.div`
  margin: 50px auto auto auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const DropdownBox = styled.div`
  width: 582px;
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
  border-radius: 10px;
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
  transition: max-height 0.5s ease, opacity 0.5s ease;

  &.open {
    max-height: 200px;
    height: 200px;
    opacity: 1;
  }
`;

const MenuItem = styled.li`
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
  width: 95%;
`;

export default DropDown;

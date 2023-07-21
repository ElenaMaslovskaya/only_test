import React from 'react';
import styled from 'styled-components';
import { CardProps } from '../utils/data';

const CardItem = styled.div`
    width: 350px;
    height: 130px;
    background-color: transparent;
    color: #42567A;
    border: 3px solid blue;
    display: flex;
    flex-direction: column;
`;

const CardTitle = styled.h2`
    height: 30px;
    font-size: 25px;
    line-height: 30px;
    color: #3877EE;
    margin: 0;
`;

const CardDescription = styled.p`
    font-size: 20px;
    line-height: 30px;
    color: #42567A;
    margin: 0;
`;

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <CardItem>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardItem>
    );
}

export default Card;
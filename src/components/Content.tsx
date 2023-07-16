import React from 'react';
import Slider from './Slider';
import styled from 'styled-components';

const BlockContent = styled.div`
    max-width: 1440px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-left: 16%;
    margin-right: 8%;
    border: 1px solid rgba(66, 86, 122, 0.1); ;
    border-top: none;
    border-bottom: none;
    padding: 150px 0px 100px 0px;
    position: relative;
    justify-content: space-between;

    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #42567A;
    opacity: 0.2;
    transform: translateY(-50%);
    }

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: #42567A;
    opacity: 0.2;
    transform: translateX(-50%);
    }

    .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 530px;
    height: 530px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #42567A;
    opacity: 0.2;
    transform: translate(-50%, -50%);
    }
`;

const ContentTitle = styled.h1`
    height: 120px;
    margin: 0px;
    color: #42567A;
    line-height: 67px;
    font-size: 56px;
    padding-left: 50px;
    border-left: 5px solid;
    border-image: linear-gradient(to bottom, #3877EE, #EF5DA8) 1;
`;

const DatesBlock = styled.div`
    width: 70%;
    height: 160px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border: 1px solid green;
    font-size: 200px;
    line-height: 160px;
    letter-spacing: -2%;
`;

const Date = styled.div`
    color: ${props => props.color};
`;

const Content: React.FC = () => {
    return (
        <BlockContent>
            <ContentTitle>
                Исторические
                <br />
                даты
            </ContentTitle>
            <div className="circle"></div>
            <DatesBlock>
                <Date color="#5D5FEF">2015</Date>
                <Date color="#EF5DA8">2022</Date>
            </DatesBlock>
            <Slider />
        </BlockContent>
    )
}

export default Content;
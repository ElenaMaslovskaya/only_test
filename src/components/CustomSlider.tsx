import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slidersData } from '../utils/data';

const SliderContainer = styled.div`
    width: 100%;
    min-height: 290px;
    padding: 0px;
    position: relative;
`;

const SliderContent = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PrevSliderButton = styled.div`

    &.swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
    border: 2px solid rgba(56, 119, 238, 0.1);
    background-color: #ffffff;
    color: #3877EE;
    position: absolute;
    right: 10px;
    top: 80px;

    }

    &.swiper-button-prev::after {
        display: none;
        
    }
`;

const NextSliderButton = styled.div`

    &.swiper-button-next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1;
        border: 2px solid rgba(56, 119, 238, 0.1);
        background-color: #ffffff;
        color: #3877EE;
        position: absolute;
        right: 10px;
        top: 80px;
    }

    &.swiper-button-next::after {
        display: none;       
    }
`;

const NavigationContainer = styled.div`
    width: 120px;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #f1f1f1;
    margin-bottom: 20px;
    position: relative;
`

const PaginationSlider = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    }
`

const CustomSlider: React.FC = () => {
    const sliderSettings: SwiperOptions = {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroupSkip: 1,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            type: 'fraction',
            el: '.swiper-pagination'
        }
    };

    return (
        <SliderContainer>
            <SliderContent>
                <NavigationContainer>
                    <PaginationSlider className='swiper-pagination' />
                <PrevSliderButton className="swiper-button-prev">
                    &#8249;
                </PrevSliderButton>
                <NextSliderButton className="swiper-button-next">
                    &#8250;
                    </NextSliderButton>
                </NavigationContainer>

                <Swiper {...sliderSettings}>
                    {slidersData.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <Slider {...slider} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SliderContent>
        </SliderContainer>
    );
}

export default CustomSlider;
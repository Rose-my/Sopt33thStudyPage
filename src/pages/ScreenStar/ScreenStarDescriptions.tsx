
import React from 'react';
import styled from 'styled-components';

interface InScreenStarPropsTypes {
  title: string;
  rate: number;
  imgSrc: string;
  imgWidth:number;
  imgHeight:number;
}

export default function ScreenStarDescriptions({title, rate,imgSrc, imgWidth, imgHeight}:InScreenStarPropsTypes){
  return (
    <ScreenDescriptionBox>
      <ScreenStarImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ScreenStarDetail>
        <ScreenStarTitle>{title}</ScreenStarTitle>
        <ScreenStarRate>{rate}</ScreenStarRate>
      </ScreenStarDetail>
    </ScreenDescriptionBox>
  );
}


const ScreenDescriptionBox= styled.section`
  display:flex;
  flex-direction:column;
  width:16.7rem;
  height:29.3rem;
  
`
const ScreenStarDetail = styled.section`
  display: flex;
  flex-direction:column;
  padding : 1.6rem 0 3.2rem 0;
`
const ScreenStarTitle =styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 2.9rem;
`
const ScreenStarRate = styled.p`
  ${({ theme }) => theme.fonts.title2};
  color : ${({ theme }) => theme.colors.mainPink};
  line-height:3.5rem;
`
const ScreenStarImage = styled.img<InScreenStarPropsTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;
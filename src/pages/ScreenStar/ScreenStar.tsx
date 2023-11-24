import React from 'react';
import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';
import ScreenStarWrapper from './ScreenStarWrapper';

import boxOfficeGrade1Img from '../../assets/image/boxoffice/boxOfficeGrade1Img.png';
export default function ScreenStar() {
  return (
    <ScreenStarContainer>
      <ScreenStarHeader>동시 상영작 별점</ScreenStarHeader>
      <ShowScreenStar>
        <ScreenStarWrapper 
        listNumber="1."
        imgSrc={boxOfficeGrade1Img}
        title="프레디의 피자 가게"
        rate={2.1}
        />
        <ScreenStarWrapper 
        listNumber="2."
        imgSrc={boxOfficeGrade1Img}
        title="헝거게임: 노래하는 새와 뱀의 발라드"
        rate={3.4}
        />
        <ScreenStarWrapper 
        listNumber="3."
        imgSrc={boxOfficeGrade1Img}
        title="더 마블스"
        rate={3.4}
        />
        <ScreenStarWrapper 
        listNumber="4."
        imgSrc={boxOfficeGrade1Img}
        title="30일"
        rate={3.2}
        />
        <ScreenStarWrapper 
        listNumber="5."
        imgSrc={boxOfficeGrade1Img}
        title="테일러 스위프트 더 에라스 투어"
        rate={3.4}
        />
        <ScreenStarWrapper 
        listNumber="6."
        imgSrc={boxOfficeGrade1Img}
        title="소년들"
        rate={2.9}
        />                        
      </ShowScreenStar>
    </ScreenStarContainer>
  );
};

const ScreenStarContainer = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  height: 50.8rem;
  gap: 3.5rem;
  background-color: yellow;
  padding: 5.5rem 5.9rem 5.5rem 5.9rem
  //border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;
const ScreenStarHeader = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
  line-height: .4rem;
`
const ShowScreenStar = styled.section`
  display: flex;
  height: 33rem;
  width: 123rem;
  gap:1rem;
`
import React from 'react';
import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';

export default function ScreenStar() {
  return (
    <ScreenStarContainer>
      <ScreenStarTitle>이 작품이 담긴 컬렉션</ScreenStarTitle>
      <ShowScreenStar>
        <ScreenStarWrapper 
        imgSrc={}
        title="프레디의 피자 가게"
        rate={2.0}
        />
        <ScreenStarWrapper 
        imgSrc={}
        title="헝거게임: 노래하는 새와 뱀의 발라드"
        rate={3.4}
        />
        <ScreenStarWrapper 
        imgSrc={}
        title="더 마블스"
        rate={3.4}
        />
        <ScreenStarWrapper 
        imgSrc={}
        title="30일"
        rate={3.2}
        />
        <ScreenStarWrapper 
        imgSrc={}
        title="테일러 스위프트 더 에라스 투어"
        rate={3.4}
        />
        <ScreenStarWrapper 
        imgSrc={}
        title="소년들"
        rate={2.9}
        />                        
      </ShowScreenStar>
    </ScreenStarContainer>
  );
};

{
  /* <MovieArticle
  imgSrc={BoxOfficeGrade6Img}
  title="마녀 배달부 키키"
  rate={3.8}
  subInfo="감독, 각본"
  tag={['가족', '애니메이션']}
/> */
}
const ScreenStarContainer = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50.8rem;
  gap: 3.5rem;
  //border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;
const ScreenStarTitle = styled.h2`
  ${({ theme }) => theme.fonts.title1};
  size: 2.4rem;
`
const ShowScreenStar = styled.section`
  display: flex;
  height: 33rem;
  width: 123rem;
`
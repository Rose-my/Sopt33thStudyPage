import styled from 'styled-components';
import {BoxOfficeStarIc} from '@assets/index' ;

interface InBoxOfficePropsTypes {
  title: string;
  rate: number;
  imgSrc: string;
  imgWidth:number;
  imgHeight:number;
}

export default function BoxOfficeWrapperDescriptions({title, rate,imgSrc, imgWidth, imgHeight}:InBoxOfficePropsTypes){
  
  return (
    <DescriptionBox>
      <DescriptionImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionStar>
        <BoxOfficeStarIcon/>
        <StarRate>{rate}</StarRate>
      </DescriptionStar>
    </DescriptionBox>
  );
}

const DescriptionBox= styled.section`
  display:flex;
  flex-direction:column;
  width:16.7rem;
  height:29.3rem;
`
const DescriptionTitle =styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 2.9rem;
  padding : 1.6rem 0 3.2rem 0;
`
const DescriptionStar = styled.span`
  display:flex;
  flex-direction:column;
  gap:0.4rem;
`
const BoxOfficeStarIcon = styled(BoxOfficeStarIc)`
  width: 2.4rem;
  height: 2.1rem;
`;

const StarRate = styled.p`
  ${({ theme }) => theme.fonts.title2};
  color : ${({ theme }) => theme.colors.mainPink};
  line-height:3.5rem;
`
const DescriptionImage = styled.img<InBoxOfficePropsTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;

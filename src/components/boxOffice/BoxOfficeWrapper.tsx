import styled from 'styled-components';
import BoxOfficeWrapperDescriptions from './BoxOfficeWrapperDescriptions';

interface InBoxOfficePropsTypes {
  WrapperNumber : string;
  imgSrc: string;
  title: string;
  rate: number;
  imgWidth: number;
  imgHeight: number;
}

/** each movie info  */
export default function BoxOfficeWrapper({
  WrapperNumber,
  imgSrc,
  title,
  rate,
  imgWidth = 15,
  imgHeight = 21.6,
}: InBoxOfficePropsTypes) {

  return (
    <WrapperContents>
      <Grade>{WrapperNumber}</Grade>
      <BoxOfficeWrapperDescriptions imgSrc={imgSrc} title={title} rate={rate} imgWidth={imgWidth} imgHeight={imgHeight}/>
    </WrapperContents>
  );
}

const WrapperContents = styled.article`
  display: flex;
  width: 19.8rem;
  height: 29.3rem;
  align-items: flex-start;
  gap: 1rem;
`;

const Grade = styled.span`
  ${({ theme }) => theme.fonts.title1};
`

import styled from 'styled-components';
import ScreenStarDescriptions from './ScreenStarDescriptions';
// import MovieTag from './MovieTag';
// import MovieInfo from './MovieInfo';

interface InScreenStarPropsTypes {
  listNumber : string;
  imgSrc: string;
  title: string;
  rate: number;
  imgWidth: number;
  imgHeight: number;
}

/** each movie info  */
export default function ScreenStarWrapper({
  listNumber,
  imgSrc,
  title,
  rate,
  imgWidth = 15,
  imgHeight = 21.6,
}: InScreenStarPropsTypes) {
  return (
    <ScreenStarBox>
      <ScreenStarGrade>{listNumber}</ScreenStarGrade>
      <ScreenStarDescriptions imgSrc={imgSrc} title={title} rate={rate} imgWidth={imgWidth} imgHeight={imgHeight}/>
    </ScreenStarBox>
  );
}

const ScreenStarBox = styled.article`
  display: flex;
  width: 19.8rem;
  height: 29.3rem;
  align-items: flex-start;
  gap: 1rem;
`;
const ScreenStarGrade = styled.span`
  ${({ theme }) => theme.fonts.title1};
`

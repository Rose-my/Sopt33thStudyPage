import styled from 'styled-components';
// import MovieTag from './MovieTag';
// import MovieInfo from './MovieInfo';

interface InScreenStarPropsTypes {
  listNumber : number;
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
    <ArticleContainer>
      <ScreenStarNum p={listNumber}/>
      <ScreenStarImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ScreenStarDetail title={title} rate={rate}/>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const ScreenStarImage = styled.img<InScreenStarPropsTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;

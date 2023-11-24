import SimilarNum1Img from '../../assets/image/similar/similarNum1Img.png';
import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';
import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import Button from '@components/common/Button/Button';
export default function SimilarWrapper() {

  return (
    <SimilarContainer>
      <SimilarHeader>비슷한 작품</SimilarHeader>
      <SimilarBox>
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="그대들, 어떻게 살 것인가"
        rate={3.8}
        tag={['애니메이션', '모험']}
      />
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="하울의 움직이는 성"
        rate={4.2}
        tag={['애니메이션', '모험']}
      />
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['애니메이션', '판타지']}
      />
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="센과 치히로의 행방불명"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      </SimilarBox>
    </SimilarContainer>
  )
};
const SimilarContainer = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  height: 70.8rem;
  gap: 3.5rem;
  padding: 15.5rem 5.9rem 5.5rem 5.9rem
`;

const SimilarHeader = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
`
const SimilarBox = styled.section`
  display: flex;
  height: 33rem;
  width: 123rem;
  gap:1.2rem;
`

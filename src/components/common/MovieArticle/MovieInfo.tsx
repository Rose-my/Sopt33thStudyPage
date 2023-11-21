import styled from 'styled-components';
import castDetailLikeIc from '@assets/icon/watcha/watchaListStarIc.svg';

interface InMovieArticleProps {
  title: string;
  rate: number;
  subInfo?: string;
}

/** each movie info  */
export default function MovieInfo({ title, rate, subInfo }: InMovieArticleProps) {
  return (
    <ArticleInfoBox>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleRateText>
        <span>평균</span>
        <img src={castDetailLikeIc} />
        <span>{rate}</span>
      </ArticleRateText>
      {subInfo && <p>{subInfo}</p>}
    </ArticleInfoBox>
  );
}

const ArticleInfoBox = styled.div`
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.grey600};
  line-height: 2rem;
`;

const ArticleTitle = styled.h3`
  ${({ theme }) => theme.fonts.subTitle5};

  color: ${({ theme }) => theme.colors.black};
  line-height: 2.3rem;
`;

const ArticleRateText = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

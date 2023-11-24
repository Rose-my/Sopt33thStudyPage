import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import { flexCenter } from '@styles/globalStyle';
import CommentSummaryBox from './CommentSummaryBox';

export default function CommentSummary() {
  return (
    <CommentSummaryContainer>
      <CommentSummaryHeader>
        <CommentSummaryHeaderLeft>
          <CommentSummaryHeaderText>코멘트</CommentSummaryHeaderText>
          <CommentSummaryHeaderNumber>6000+</CommentSummaryHeaderNumber>
        </CommentSummaryHeaderLeft>
        <CommentSummaryHeaderRight>
          <CommentSummaryHeaderButton>더보기</CommentSummaryHeaderButton>
        </CommentSummaryHeaderRight>
      </CommentSummaryHeader>
      <CommentSummaryBox/>
    </CommentSummaryContainer>
  );
}

const CommentSummaryContainer = styled(SectionContainer)`
  flex-direction:column;
  height: 68rem;
  background-color:white;
  padding: 4.4rem 5.8rem 5.3rem;
`;

const CommentSummaryHeader = styled.div`
  ${flexCenter}
  width:124.6rem;
  height:3.5rem;
  gap: 100.2rem;
`
const CommentSummaryHeaderLeft=styled.div`
  display:flex;
  width:20rem; 
  gap:0.5rem;
`
const CommentSummaryHeaderRight=styled.div`
  width:4.5rem;
  height:2.3rem;
`
const CommentSummaryHeaderButton=styled.button`
  ${({ theme }) => theme.fonts.subTitle5};
  color: ${({ theme }) => theme.colors.mainPink};
  line-height: 2.4rem;
  cursor:point;
`;
const CommentSummaryHeaderText = styled.span`
  ${({ theme }) => theme.fonts.title2};
  line-height : 3.5rem
`;
const CommentSummaryHeaderNumber = styled.span`
  ${({ theme }) => theme.fonts.title3};
  color: ${({ theme }) => theme.colors.mainPink};
  line-height : 3.5rem
`;

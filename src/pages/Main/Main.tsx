import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@styles/globalStyle'
import MainSetReview from './MainSetReview'
import MovieTag from '@components/common/MovieArticle/MovieTag'
import MyPage from './MyPage'

export default function Main(){
  return (
    <MainSection>
      <MainSide>
        <MainSideImage/>
      </MainSide>
      <MainContents>
        <MainSetReview/> 
        <MyPage/>
        <MainDescription>
          화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께  
          어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 
          힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 
          저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 
          그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 
          왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!
        </MainDescription>  
        <MainPopularComment>
          <h2>인기 코멘트</h2>
          <MainPopularCommentContainer>
            <CommentSummaryWrapper/>
            <CommentSummaryWrapper/>
          </MainPopularCommentContainer>
        </MainPopularComment> 
      </MainContents> 
    </MainSection>
  )
}
const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  gap:3.1rem;
  padding: 3rem 5.8rem 8rem 6rem;
  background-color: ${({ theme }) => theme.colors.grey200};
`

const MainSide = styled.aside`
  width:28.1rem;
  height:55.7rem;
  background-color:black;
`
const MainSideImage = styled.img`

`

const MainContents = styled.section`
  display:flex;
  flex-direction:column;
  width:93.7rem;
`

const MainDescription = styled.p`
  height:15.7rem;
  padding: 4rem 0;
  ${({ theme }) => theme.fonts.body2160};
  color: ${({ theme }) => theme.colors.grey600};
  border-top:  1px solid ${({ theme }) => theme.colors.grey400}; 
  border-bottom:  1px solid ${({ theme }) => theme.colors.grey400}; 
`;

const MainPopularComment = styled.article`
  height:32rem;
  margin-top:4rem;
  &>h2{
    ${({ theme }) => theme.fonts.body5}; 
    color: ${({ theme }) => theme.colors.grey600};
    line-height:1.7rem;
  }
`
const MainPopularCommentContainer = styled.section`
  display:flex;
  flex-direction:row;
  margin-top:1.2rem;
  gap:1.2rem;
`
const CommentSummaryWrapper=styled.article`
  height:25rem;
  width:46.2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
`
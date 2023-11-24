import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@styles/globalStyle';

export default function CommentSummaryBox() {
  return (
    <ShowCommentSummary>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
      <CommentSummaryWrapper/>
    </ShowCommentSummary>
  )
}

const ShowCommentSummary= styled.section`
  display:flex;
  flex-direction:row;
  flex-flow: row wrap;
  align-items:space-between;
  gap: 1rem;
  height: 51rem;
  margin-top:3.5rem;
`
const CommentSummaryWrapper=styled.article`
  height:25rem;
  width:30.4rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
`
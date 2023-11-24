import React from 'react'
import styled from 'styled-components'
import MovieTag from '@components/common/MovieArticle/MovieTag'

export default function MyPage() {
  return (
    <TagContainer>
      <h2>선호하는 태그</h2>
      <MovieTag tag={['스튜디오 지브리','소셜 원작']} />
    </TagContainer>
  )
}

const TagContainer = styled.div` 
  padding:4rem 0;
  &>h2{
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.grey600};
    line-height: 1.8rem;
    margin-bottom:1.2rem;
  }
`

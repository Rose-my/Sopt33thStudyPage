import React from 'react'
import styled from 'styled-components'
import MainSetButton from './MainSetButton'

export default function MainSetReview() {
  return (
    <MainSetReviewHeader>
      <MainSetReviewDetails>
        <MainSetStars/>
        <MainSetRates>
          <MyRate>
            <p>3.9</p>
            <h2>내 별점</h2>
          </MyRate>
          <AverageRate>
            <p>3.4</p>
            <h2>평균 별점(3.2만명)</h2>            
          </AverageRate>
        </MainSetRates>
        <MainSetButton/>
      </MainSetReviewDetails>
    </MainSetReviewHeader>
  )
}

const MainSetReviewHeader = styled.div`
  height:11.2rem;
  border-bottom:  1px solid ${({ theme }) => theme.colors.grey400}; 
`
const MainSetReviewDetails = styled.section`
  display:flex;
  flex-direction:row;
  gap:15.1rem;
  height:7.2rem;

`
const MainSetStars = styled.div`
  width:22.5rem;
`
const MainSetRates= styled.span`
  display:flex;
  flex-direction:row;
  gap:4rem;
`

const MyRate = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  /* width: 5rem;
  height:6.8rem; */
  color: ${({ theme }) => theme.colors.mainPink};
  &>p{
    ${({ theme }) => theme.fonts.subTitle7};
    line-height:5.1rem;
  }
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height:1.7rem;
  }
`

const AverageRate = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  color: ${({ theme }) => theme.colors.grey600};
  &>p{
    ${({ theme }) => theme.fonts.subTitle7};
    line-height:5.1rem;
  }
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height:1.7rem;
  }
`
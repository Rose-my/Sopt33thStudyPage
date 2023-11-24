import React from 'react'

import styled from 'styled-components'

export default function CastsBox() {
  return (
    <CastsBoxContainer>
      <CastsSection/>
    </CastsBoxContainer>
  )
}

const CastsBoxContainer=styled.section`
  display: flex;
  height: 30rem;
  width: 123.6rem;
  display:flex;
  flex-direction:row;
  flex-flow: row wrap;
  align-items:space-between;
  border: 1px solid ${({ theme }) => theme.colors.black};
`
const CastsSection= styled.article`
  height:6.6rem;
  width:29.7rem;
  box-sizing: border-box;
  
`
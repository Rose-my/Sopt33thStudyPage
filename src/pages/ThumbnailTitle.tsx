import React from 'react'
import styled from 'styled-components'
import ThumbnailTitleHeader from './ThumbnailTitleHeader'
import ThumbnailTitleDescription from './ThumbnailTitleDescription'
import { SectionContainer } from '@styles/globalStyle'
export default function ThumbnailTitle() {
  return (
    <Section>
      <ThumbnailTitleHeader/>
      <ThumbnailTitleDescription/>
    </Section>

  )
}

const Section = styled(SectionContainer)`
  gap:0.8rem;
  position:absolute;
  color: ${({ theme }) => theme.colors.white};
  bottom:5.6rem;
`

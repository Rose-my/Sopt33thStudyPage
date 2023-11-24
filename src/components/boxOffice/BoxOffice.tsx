import React from 'react'
import { SectionContainer } from '@styles/globalStyle';
import BoxOfficeHeader from './BoxOfficeHeader';
import BoxOfficeArticle  from './BoxOfficeArticle';
import styled from 'styled-components';
export default function BoxOffice() {

  return (
    <Section>
      <BoxOfficeHeader/>
      <BoxOfficeArticle/>
    </Section>

  )
}

const Section = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  height: 50.8rem;
  gap: 3.5rem;
  background-color: yellow;
  padding: 5.5rem 5.9rem 5.5rem 5.9rem;
`;

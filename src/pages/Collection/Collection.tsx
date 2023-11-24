import React from 'react'
import CollectionWrapper from './CollectionWrapper'
import CollectionNum1 from '../../assets/image/collection/collectionNum1Img.png';
import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';

export default function Collection() {

  return (
    <CollectionContainer>
      <CollectionHeader>이 작품이 담긴 컬렉션</CollectionHeader>
      <CollectionBox>
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="한번쯤은 꼭 봤으면 하는 영화"
          likes={11502}
        /> 
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="한번쯤은 꼭 봤으면 하는 영화"
          likes={11502}
        /> 
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="애니메이션"
          likes={1324}
        /> 
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="이상한 꿈 같은 영화"
          likes={262}
        />  
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="일본교복이 나오는 영화"
          likes={254}
        />
        <CollectionWrapper
          imgSrc={CollectionNum1}
          title="괴작 혹은 띵작"
          likes={180}
        />           
      </CollectionBox>
    </CollectionContainer>
  )
};
const CollectionContainer = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  height: 50.8rem;
  padding: 12.3rem 5.9rem 5.5rem 5.9rem;
  gap: 3.5rem;
`;

const CollectionHeader = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
  line-height: 3.5rem;
`
const CollectionBox = styled.section`
  display: flex;
  height: 33rem;
  width: 123rem;
  gap:1.2rem;
`
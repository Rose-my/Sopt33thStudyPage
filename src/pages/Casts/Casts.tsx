import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';
import CastsBox from './CastsBox';
import Button from '@components/common/Button/Button'

export default function Casts() {
  return (
    <CastsContainer>
      <CastsHeader>출연/제작</CastsHeader>
      <CastsDetailContainer>
        <CastsBox/> 
        <Button/>
      </CastsDetailContainer>
    </CastsContainer> 
  )
};
const CastsContainer = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  height: 54.8rem;
  gap: 3.5rem;
  padding: 5.5rem 6.0rem 5.5rem 6.0rem;
`;

const CastsHeader = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
`;
const CastsDetailContainer = styled(SectionContainer)`
  display: flex; 
  flex-direction:column;
  align-items:center;
  height:36.8rem;
  gap: 3.5rem; 
`

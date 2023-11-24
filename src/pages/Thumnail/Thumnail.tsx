import { SectionContainer } from '@styles/globalStyle'
import React from 'react'
import styled from 'styled-components'

export default function ThumnailS(){
  const ThumnailImageSrc = '../../src/assets/image/thumbnail/thumnailMainsteelImg.png'
  return (
    <ThumnailContainer>
      <ThumnailHeader src={ThumnailImageSrc} alt="Thumbnail Image" />
      <ThumnailContent>
        <ThumnailContentHeader>그대들은 어떻게 살것인가</ThumnailContentHeader>
        <ThumnailContentDescription>
          <p>君たちはどう生きるか</p>
          <p>2023·애니메이션/모험/판타지/드라마/가족·일본</p>
          <p>2시간 4분·전체</p>
          <p>예매 순위 7위(4.1%)·개봉 15일째·누적 관객 153.5만명</p>
        </ThumnailContentDescription>
      </ThumnailContent>
    </ThumnailContainer>
  )
}

const ThumnailContainer = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
`
const ThumnailHeader = styled.img`
  position:relative;
`
const ThumnailContent = styled(SectionContainer)`
  gap:0.8rem;
  position:absolute;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 33rem;
`
const ThumnailContentHeader = styled.h2`
  ${({ theme }) => theme.fonts.largeTitle};
  line-height: 5.2rem;
`
const ThumnailContentDescription = styled.article`
  line-height: 2.1rem;
  gap:0.6rem;
`
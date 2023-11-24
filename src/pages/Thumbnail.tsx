import ThumbnailHeader from '@components/thumnail/ThumnailHeader';
import ThumbnailTitle from './ThumbnailTitle';
import styled from 'styled-components';
export default function Thumbnail() {
  return (
    <Wrapper>
      <ThumbnailHeader/>
      <ThumbnailTitle/>
    </Wrapper>
  );
}
const Wrapper=styled.section`
  position:relative;
`

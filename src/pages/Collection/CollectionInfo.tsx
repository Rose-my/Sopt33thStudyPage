import styled from 'styled-components';
import castDetailLikeIc from '@assets/icon/watcha/watchaListStarIc.svg';

interface InCollectionInfoProps {
  title: string;
  likes: number;
}

/** each movie info  */
export default function CollectionInfo({ title,likes}: InCollectionInfoProps) {
  return (
    <CollectionInfoBox>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionLikes>
        <span>좋아요 {likes}</span>
      </CollectionLikes>
    </CollectionInfoBox>
  );
}

const CollectionInfoBox = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grey600};
`;
const CollectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.subTitle5};

  color: ${({ theme }) => theme.colors.black};
  line-height: 2.3rem;
`;
const CollectionLikes = styled.h3`
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.grey600};
  line-height: 2.0rem;
`;

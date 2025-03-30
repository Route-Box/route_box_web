import { Inquiry } from '@/api/inquiry/types';
import { Container, Content, Ellipsis, FlexBox, Status } from './style';
import { formatDate } from '@/utils/dateFormat';
import { InquiryStatusMap } from '@/constants/inquiry';
import Typography from '@/components/common/Typography';

interface InquiryListItemProps {
  inquiry: Inquiry;
  onClick: () => void;
}

function InquiryListItem({ inquiry, onClick }: InquiryListItemProps) {
  return (
    <Container role="li" onClick={onClick}>
      <Content>
        <FlexBox>
          <Ellipsis variant="Body_R_M">{inquiry.content}</Ellipsis>
          <Typography
            variant="Body_R_S"
            color={inquiry.status === 'ANSWERED' ? 'var(--main-color)' : 'var(--Gray2_)'}
          >
            {InquiryStatusMap[inquiry.status]}
          </Typography>
        </FlexBox>
        <Typography variant="Body_R_S" color="var(--Gray4_disable-text)">
          {formatDate(inquiry.createdAt)}
        </Typography>
      </Content>
    </Container>
  );
}

export default InquiryListItem;

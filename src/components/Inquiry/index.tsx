import { Inquiry } from '@/api/inquiry/types';
import { Container, Content, CreatedAt, Status } from './style';
import Typography from '../common/Typography';

interface InquiryListItemProps {
  inquiry: Inquiry;
}

function InquiryListItem({ inquiry }: InquiryListItemProps) {
  return (
    <Container role="li">
      <Container>
        <Typography variant="Body_R_M">{inquiry.content}</Typography>
        <Typography variant="Body_R_S">{inquiry.status}</Typography>
        {/* <CreatedAt>{inquiry.createdAt}</CreatedAt> */}
      </Container>
    </Container>
  );
}

export default InquiryListItem;

import { Modal } from '@/components/modal';
import styled from 'styled-components';
import Typography from '../Typography';

interface ConfirmationModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirmAction?: () => void;
  content: string;
}

export const ConfirmationModal = ({
  isOpen,
  closeModal,
  onConfirmAction = () => {},
  content,
}: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Container>
        <Content>
          <Typography variant="Body_R_M">{content}</Typography>
        </Content>
        <ButtonContainer>
          <ButtonCancel onClick={closeModal}>
            <Typography variant="Body_R_M">아니요</Typography>
          </ButtonCancel>
          <ButtonConfirm
            onClick={() => {
              onConfirmAction();
              closeModal();
            }}
          >
            <Typography variant="Body_B_M" color="#21C8B6">
              네
            </Typography>
          </ButtonConfirm>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
`;

const Content = styled.div`
  padding: 40px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  border: 0;
  border-top: 1px solid #e2e2e2;
`;

const ButtonCancel = styled.div`
  width: 100%;
  outline: none;
  border: 0;
  padding: 15px;
`;

const ButtonConfirm = styled.div`
  width: 100%;
  outline: none;
  border: 0;
  padding: 15px;
  border-left: 1px solid #e2e2e2;
`;

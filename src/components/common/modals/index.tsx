import { Modal } from '@/components/modal';
import Typography from '../Typography';
import { ButtonContainer, Container, Content } from './style';

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
        <Content className="body-r-m">{content}</Content>
        <ButtonContainer>
          <button className="body-r-m" onClick={closeModal}>
            아니요
          </button>
          <button
            className="body-b-m yes"
            onClick={() => {
              onConfirmAction();
              closeModal();
            }}
          >
            네
          </button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

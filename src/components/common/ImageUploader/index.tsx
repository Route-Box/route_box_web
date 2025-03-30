import { useRef } from 'react';
import styled from 'styled-components';
import { AnyFieldApi } from '@tanstack/react-form';
import Typography from '../Typography';

interface ImageUploaderProps {
  field: AnyFieldApi;
  label?: string;
  maxImages?: number;
}

export const ImageUploader = ({
  field,
  label = '사진 첨부하기',
  maxImages = 5,
}: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    field.handleChange(files);
  };

  return (
    <Container>
      <Typography variant="Body_R_S">
        {label} {field.state.value?.length || 0}/{maxImages}
      </Typography>
      <ImageGrid>
        {/* 이미지 추가 버튼 */}
        <AddImageButton onClick={handleClick}>
          <PlusIcon>+</PlusIcon>
        </AddImageButton>

        {/* 선택된 이미지 미리보기 */}
        {field.state.value?.map((file: File, index: number) => (
          <ImagePreview key={index}>
            <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
            <DeleteButton
              onClick={() => {
                const newFiles = field.state.value.filter((_: File, i: number) => i !== index);
                field.handleChange(newFiles);
              }}
            >
              ×
            </DeleteButton>
          </ImagePreview>
        ))}
      </ImageGrid>

      <input ref={inputRef} type="file" hidden multiple accept="image/*" onChange={handleChange} />

      {field.state.meta.errors.length > 0 && (
        <ErrorMessage variant="Body_R_S" color="error">
          {field.state.meta.errors.join(', ')}
        </ErrorMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  overflow-x: auto;
  padding: 4px 0;
`;

const AddImageButton = styled.button`
  width: 80px;
  height: 80px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  flex-shrink: 0;
`;

const PlusIcon = styled.span`
  font-size: 24px;
  color: #666;
`;

const ImagePreview = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const ErrorMessage = styled(Typography)`
  color: #ff4444;
  margin-top: 4px;
`;

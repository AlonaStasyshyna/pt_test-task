import { Button, ModalWindow, Overlay } from './ToDoModal.styled';

export const ToDoModal = ({
  title,
  description,
  status,
  changeStatus,
  closeModal,
}) => {
  return (
    <Overlay>
      <ModalWindow>
        <h1>{title}</h1>
        <h2>Description:</h2>
        <p>{description}</p>
        <label>
          Status:
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={changeStatus}
          />
        </label>

        <Button type="button" onClick={closeModal}>
          Close
        </Button>
      </ModalWindow>
    </Overlay>
  );
};

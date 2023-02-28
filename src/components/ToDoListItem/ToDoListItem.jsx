import { useState } from 'react';
import { ToDoModal } from 'components/ToDoModal/ToDoModal';
import { Input, Item, Wrapper } from './ToDoListItem.styled';

export const ToDoListItem = ({ id, title, description }) => {
  const [status, setStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeStatus = () => {
    setStatus(prevState => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Item>
        <Wrapper onClick={openModal}>
          <p>{id}</p>
          <p>{title.length > 12 ? `${title.slice(0, 11)}...` : title}</p>
          <p>
            {description.length > 18
              ? `${description.slice(0, 17)}...`
              : description}
          </p>
        </Wrapper>

        <Input
          type="checkbox"
          name="status"
          checked={status}
          onChange={changeStatus}
        />
      </Item>

      {isModalOpen && (
        <ToDoModal
          title={title}
          description={description}
          status={status}
          changeStatus={changeStatus}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

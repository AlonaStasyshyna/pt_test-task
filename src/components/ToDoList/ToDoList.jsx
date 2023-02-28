import { nanoid } from 'nanoid';
import { ToDoListItem } from 'components/ToDoListItem/ToDoListItem';
import { List, TitleItem } from './ToDoList.styled';

export const ToDoList = ({ list }) => {
  return (
    <List>
      <TitleItem>
        <p>ID</p>
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>STATUS</p>
      </TitleItem>

      {list.map(({ id, title, description }) => (
        <ToDoListItem
          key={nanoid()}
          id={id}
          title={title}
          description={description}
        />
      ))}
    </List>
  );
};

import styled from 'styled-components';
import { Item } from 'components/ToDoListItem/ToDoListItem.styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 670px;
  margin: 0;
  list-style: none;
`;

export const TitleItem = styled(Item)`
  background-color: #a9a9a9;

  p {
    font-weight: 500;
  }
`;

import { useState } from 'react';
import { ErrorMessage, Form, Label } from './ToDoForm.styled';

export const ToDoForm = ({ addToDo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const changeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return setError(true);
    }

    addToDo({ title, description });
    setError(false);
    formReset();
  };

  const formReset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={submitForm}>
      <Label error={!title.trim() && error}>
        Title:
        <input type="text" name="title" value={title} onChange={changeInput} />
        {error && !title.trim() && (
          <ErrorMessage>This field is empty</ErrorMessage>
        )}
      </Label>

      <Label error={!description.trim() && error}>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={changeInput}
        />
        {error && !description.trim() && (
          <ErrorMessage>This field is empty</ErrorMessage>
        )}
      </Label>

      <button type="submit">Create</button>
    </Form>
  );
};

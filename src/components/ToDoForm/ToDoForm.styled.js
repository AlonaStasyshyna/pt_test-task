import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 25px;
  align-items: flex-end;
  margin-bottom: 60px;
  padding-top: 60px;
  padding-left: 40px;

  button {
    display: block;
    height: 22px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;

  input {
    width: 272px;
    border-color: ${p => (p.error ? 'red' : 'gray')};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 60px;
  left: 0;

  margin: 0;
  font-size: 12px;
  color: red;
`;

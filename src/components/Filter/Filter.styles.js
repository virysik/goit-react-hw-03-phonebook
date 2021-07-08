import styled from "@emotion/styled";

export const Input = styled.input`
  position: absolute;
  top: 30px;
  left: 0px;
  min-width: 200px;
  height: 20px;
  padding: 4px 10px;
  border: 2px solid #1b3c59;
  border-radius: 2px;
  transition: border 250ms ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid #11bfae;
  }
`;
export const Label = styled.label`
  position: relative;
  margin-bottom: 50px;
  color: #1b3c59;
  font-size: 20px;
`;

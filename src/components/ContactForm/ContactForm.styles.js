import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px;
  border: 2px dashed #456173;
`;
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
  margin-bottom: 42px;
  color: #1b3c59;
  font-size: 20px;
`;
export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 6px 8px;
  width: 130px;

  font-size: 18px;
  font-weight: 700;
  color: #f2f2f0;
  background-color: #11bfae;
  border-radius: 4px;
  border: transparent;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #11bfae;
    background-color: #456173;
  }
`;

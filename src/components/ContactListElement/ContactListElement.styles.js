import styled from "@emotion/styled";

export const Li = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 4px;
  color: #1b3c59;
  font-size: 18px;
`;
export const Button = styled.button`
  margin-left: auto;
  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  color: #f2f2f0;
  background-color: #1b3c59;
  border-radius: 4px;
  border: transparent;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #456173;
  }
`;
export const Span = styled.span`
  margin-right: 20px;
`;

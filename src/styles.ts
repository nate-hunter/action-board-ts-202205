import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #3179ba;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  min-height: 40px;
  width: 300px;
  padding: 8px 8px;
  margin-right: 20px;
  border-radius: 3px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  max-width: 300px;
  border-radius: 3px;
  border-color: #fff;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;

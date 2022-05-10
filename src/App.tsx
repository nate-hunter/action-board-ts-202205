import React from "react";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

function App() {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Action:</ColumnTitle>
        <CardContainer>1st Item</CardContainer>
        <CardContainer>2nd Item</CardContainer>
        <CardContainer>3rd Item</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;

import { InputLabel } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled.input`
  width: 100px;
  height: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin-left: 10px;
`;

export const Filters = ({
  weightFilterChange,
  portFilterChange,
  handleFilter,
}) => {
  return (
    <RootDiv>
      <Div>
        <InputLabel>Weight:</InputLabel>
        <StyledTextField onChange={weightFilterChange} />
      </Div>

      <Div>
        <InputLabel>Home Port:</InputLabel>
        <StyledTextField onChange={portFilterChange} />

        <StyledButton variant="contained" onClick={handleFilter}>
          Search
        </StyledButton>
      </Div>
    </RootDiv>
  );
};

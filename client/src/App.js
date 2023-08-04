import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
// import "./App.css";

function App() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ship Type</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Home port</TableCell>
            <TableCell>Ship Name</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default App;

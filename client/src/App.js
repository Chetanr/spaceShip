import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

function App() {
  const [ships, setShips] = useState();

  useEffect(() => {
    getAndUpdateShips();
  }, []);

  const getAndUpdateShips = async () => {
    const result = await axios.get("http://localhost:4000/listShips");
    // console.log("result:", result.data);
    setShips(result.data);
  };

  if (!ships) {
    return <div>Loading...</div>;
  }
  return (
    ships && (
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
          <TableBody>
            {ships.map((ship) => {
              <TableRow>
                <TableCell>{ship.type}</TableCell>
                <TableCell>{ship.weight}</TableCell>
                <TableCell>{ship.port}</TableCell>
                <TableCell>{ship.name}</TableCell>
                <TableCell>{ship.class}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import axios from "axios";
import { TableHeader } from "./Table/TableHead";
import { Body } from "./Table/TableBody";
import { Filters } from "./Filters/Filter";

function App() {
  const [ships, setShips] = useState([]);
  const [weightFilter, setWeightFilter] = useState("");
  const [portFilter, setPortFilter] = useState("");

  useEffect(() => {
    getAndUpdateShips();
  }, []);

  const handleWeightFilterChange = (event) => {
    setWeightFilter(event.target.value);
  };

  const handlePortFilterChange = (event) => {
    setPortFilter(event.target.value);
  };

  const handleFilter = () => {
    getAndUpdateShips();
  };

  const getAndUpdateShips = async () => {
    if (weightFilter || portFilter) {
      const result = await axios.get(
        `http://localhost:4000/getShip?weight=${weightFilter}&port=${portFilter}`
      );
      setShips(result.data);
      return;
    }
    const result = await axios.get("http://localhost:4000/listShips");
    setShips(result.data);
  };

  if (!ships) {
    return <div>Loading...</div>;
  }

  return (
    ships && (
      <div>
        <Filters
          weightFilterChange={handleWeightFilterChange}
          portFilterChange={handlePortFilterChange}
          handleFilter={handleFilter}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHeader />
            <Body ships={ships} />
          </Table>
        </TableContainer>
      </div>
    )
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import { TableHeader } from "./components/Table/TableHead";
import { Body } from "./components/Table/TableBody";
import { Filters } from "./components/Filters/Filter";
import { NetworkErrorMessage } from "./components/snackbar/Alert";

import { getData } from "./components/axios";

function App() {
  const [ships, setShips] = useState([]);
  const [weightFilter, setWeightFilter] = useState("");
  const [portFilter, setPortFilter] = useState("");
  const [alert, setAlert] = useState(false);

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

  const handleAlert = () => {
    setAlert(false);
  };

  const getAndUpdateShips = async () => {
    let url = `/listShips`;
    if (weightFilter || portFilter) {
      url = `/getShip?weight=${weightFilter}&port=${portFilter}`;
    }

    try {
      const result = await getData(url);
      setShips(result.data);
    } catch (error) {
      setAlert(true);
      return;
    }
  };

  if (!ships) {
    return <div>Loading...</div>;
  }

  return (
    ships && (
      <div>
        <NetworkErrorMessage showAlert={alert} handleClose={handleAlert} />
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

// import React from "react"
import { TableHead, TableCell, TableRow } from "@mui/material";

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Ship Type</TableCell>
        <TableCell>Weight</TableCell>
        <TableCell>Home port</TableCell>
        <TableCell>Ship Name</TableCell>
        <TableCell>Class</TableCell>
      </TableRow>
    </TableHead>
  );
};

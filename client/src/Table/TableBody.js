import React from "react";
import { TableCell, TableRow, TableBody } from "@mui/material";

export const Body = ({ ships }) => {
  return (
    <TableBody>
      {ships.map((ship) => {
        return (
          <TableRow key={ship.name}>
            <TableCell>{ship.type}</TableCell>
            <TableCell>{ship.weight}</TableCell>
            <TableCell>{ship.port}</TableCell>
            <TableCell>{ship.name}</TableCell>
            <TableCell>{ship.class}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

"use client";

import {
  Button,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { AddIcon } from "./svgs/svg";

function PollingUnitsDisplay() {
  const [lga, setLga] = useState("LGA1");
  const [ward, setWard] = useState("Ward1");

  return (
    <div className="space-y-5">
    <div className="flex flex-wrap items-center justify-between gap-5">
      <div className="flex items-center gap-3">
        <Select
          label="LGA"
          value={lga}
          size="small"
          onChange={(e) => setLga(e.target.value)}
        >
          <MenuItem value={"LGA1"}>LGA 1</MenuItem>
          <MenuItem value={"LGA2"}>LGA 2</MenuItem>
          <MenuItem value={"LGA3"}>LGA 3</MenuItem>
        </Select>

        <Select
          label="Ward"
          value={ward}
          size="small"
          onChange={(e) => setWard(e.target.value)}
        >
          <MenuItem value={"Ward1"}>Ward 1</MenuItem>
          <MenuItem value={"Ward2"}>Ward 2</MenuItem>
          <MenuItem value={"Ward3"}>Ward 3</MenuItem>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="contained"
          title="New Unit"
          className="bg-primary text-[white] hover:bg-primary/80"
          startIcon={
            <AddIcon fill="#fff" stroke="#fff" className="w-5 h-5" />
          }
        >
          <span className="xs:hidden">New Unit</span>
        </Button>

        <Button
          variant="contained"
          className="bg-primary text-[white] hover:bg-primary/80"
        >
          Compare Results
        </Button>
      </div>
    </div>

      <TableContainer>
        <Table className="whitespace-nowrap">
          <TableHead className="bg-primary/10">
            <TableRow>
              <TableCell>Head 1</TableCell>
              <TableCell>Head 2</TableCell>
              <TableCell>Head 3</TableCell>
              <TableCell>Head 4</TableCell>
              <TableCell>Head 5</TableCell>
              <TableCell>Head 6</TableCell>
              <TableCell>Head 7</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell>Data 5</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell>Data 5</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell>Data 5</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell>Data 5</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 7</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPage={10}
          count={10}
          onPageChange={() => {}}
          page={0}
        />
      </TableContainer>
    </div>
  );
}

export default PollingUnitsDisplay;

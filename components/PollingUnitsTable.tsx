"use client";

import { PollingUnit } from "@/types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from "@mui/material";
import router from "next/router";
import { useState } from "react";

function PollingUnitsTable({ pollUnits }: { pollUnits: PollingUnit[] }) {
  const [start, setStart] = useState(0);

  return (
    <TableContainer>
      <Table className="whitespace-nowrap">
        <TableHead className="bg-primary/10">
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Unit Number</TableCell>
            <TableCell>Unit Name</TableCell>
            <TableCell>Unit Description</TableCell>
            <TableCell>Entered By</TableCell>
            <TableCell>User IP</TableCell>
            <TableCell>Date Entered</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Latitude</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pollUnits.splice(start, 15).map((unit, ind) => (
            <TableRow
              key={ind}
              tabIndex={0}
              className="hover:bg-[#ededed] cursor-pointer"
              onClick={() =>
                router.push(
                  `/polling-unit-result?name=${unit.polling_unit_name}&id=${unit.polling_unit_id}`
                )
              }
            >
              <TableCell>{ind + 1}</TableCell>
              <TableCell>{unit.polling_unit_id}</TableCell>
              <TableCell>{unit.polling_unit_number}</TableCell>
              <TableCell>{unit.polling_unit_name}</TableCell>
              <TableCell>{unit.polling_unit_description ?? ""}</TableCell>
              <TableCell>{unit.entered_by_user ?? ""}</TableCell>
              <TableCell>{unit.user_ip_address ?? ""}</TableCell>
              <TableCell>
                {new Date(unit.date_entered).toDateString()}
              </TableCell>
              <TableCell>{unit.long}</TableCell>
              <TableCell>{unit.lat}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPage={15}
              count={pollUnits.length}
              onPageChange={(_, pg) => {
                setStart(pg * 15);
                console.log(pg);
              }}
              page={0}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default PollingUnitsTable;

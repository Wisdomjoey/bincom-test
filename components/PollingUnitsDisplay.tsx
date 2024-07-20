"use client";

import { Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { AddIcon } from "./svgs/svg";

function PollingUnitsDisplay() {
  const [lga, setLga] = useState("LGA1");
  const [ward, setWard] = useState("Ward1");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3 flex-1">
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

        <div className="flex items-center gap-3 flex-1">
          <Button
            variant="contained"
            className="bg-primary text-[white]"
            startIcon={
              <AddIcon fill="#fff" stroke="#fff" className="w-5 h-5" />
            }
          >
            New Unit
          </Button>

          <Button
            variant="contained"
            className="bg-primary text-[white]"
          >
            Compare Results
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PollingUnitsDisplay;

"use client";

import {
  Button,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AddIcon } from "./svgs/svg";
import { LGA, PollingUnit, Ward } from "@/types";
import { fetchLGAs } from "@/data/lga";
import { fetchLGAWards } from "@/data/ward";
import { fetchWardPUs } from "@/data/polling_unit";
import Loader from "./widgets/loader";
import { useRouter } from "next/navigation";
import Link from "next/link";

function PollingUnitsDisplay() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");
  const [lgas, setLgas] = useState<LGA[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [pollUnits, setPollUnits] = useState<PollingUnit[]>([]);

  useEffect(() => {
    fetchLGAs()
      .then((data) => {
        if (data.error) {
          console.error(data.error);

          return alert("Something went wrong");
        }

        if (data.data) {
          setLgas(data.data);
          setLga(data.data[0]?.lga_id?.toString() ?? "");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  }, []);

  useEffect(() => {
    if (lga !== "") {
      setLoading(true);

      fetchLGAWards(parseInt(lga)).then((data) => {
        if (data.error) {
          console.error(data.error);

          return alert("Something went wrong");
        }

        if (data.data) {
          setWards(data.data);
          setWard(data.data[0]?.ward_id?.toString() ?? "");
        }
      });
    }
  }, [lga]);

  useEffect(() => {
    if (ward !== "") {
      fetchWardPUs(parseInt(ward)).then((data) => {
        if (data.error) {
          console.error(data.error);

          return alert("Something went wrong");
        }

        if (data.data) {
          setPollUnits(data.data);
          setLoading(false);
        }
      });
    }
  }, [ward]);

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
            {lgas.map((lga, ind) => (
              <MenuItem key={ind} value={lga.lga_id}>
                {lga.lga_name}
              </MenuItem>
            ))}
          </Select>

          <Select
            label="Ward"
            value={ward}
            size="small"
            onChange={(e) => setWard(e.target.value)}
          >
            {wards.map((ward, ind) => (
              <MenuItem key={ind} value={ward.ward_id}>
                {ward.ward_name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="contained"
            title="New Unit"
            className="bg-primary text-[white] hover:bg-primary/80 xs:[&>span]:!m-0"
            onClick={
              lga === "" || ward === ""
                ? undefined
                : () => router.push(`/new-unit?lga=${lga}&ward=${ward}`)
            }
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

      {loading && <Loader />}

      {!loading && (
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
      )}
    </div>
  );
}

export default PollingUnitsDisplay;

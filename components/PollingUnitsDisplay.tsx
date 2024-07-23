"use client";

import { Button, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { AddIcon } from "./svgs/svg";
import { LGA, PollingUnit, Ward } from "@/types";
import { fetchLGAs } from "@/data/lga";
import { fetchLGAWards } from "@/data/ward";
import { fetchWardPUs } from "@/data/polling_unit";
import Loader from "./widgets/loader";
import { useRouter } from "next/navigation";
import PollingUnitsTable from "./PollingUnitsTable";

function PollingUnitsDisplay() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
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
            onChange={(e) => {
              console.log(e.target.value);
              setLga(e.target.value);
            }}
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
            onClick={() => {
              console.log(lga);
              console.log(lgas.filter((val) => val.lga_id.toString() === lga)[0]);
              router.push(
                `/compare-results?lga=${lga}&name=${
                  lgas.filter((val) => val.lga_id.toString() === lga)[0]
                    .lga_name
                }`
              );
            }}
          >
            Compare Results
          </Button>
        </div>
      </div>

      {loading && <Loader />}

      {!loading && <PollingUnitsTable pollUnits={pollUnits} />}
    </div>
  );
}

export default PollingUnitsDisplay;

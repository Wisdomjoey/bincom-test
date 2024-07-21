"use client";

import { fetchTotalLGAs } from "@/data/lga";
import { fetchTotalPUs } from "@/data/polling_unit";
import { fetchTotalWards } from "@/data/ward";
import { useEffect, useState } from "react";

function TotalOverview() {
  const [data, setData] = useState({ lgas: 0, wards: 0, units: 0 });

  useEffect(() => {
    fetchTotalLGAs().then((data1) => {
      fetchTotalWards().then((data2) => {
        fetchTotalPUs().then((data3) =>
          setData({
            lgas: data1.data ?? 0,
            wards: data2.data ?? 0,
            units: data3.data ?? 0,
          })
        );
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-2 xs:grid-cols-1 gap-5">
      {[
        { head: "State", text: "Delta" },
        { head: "LGAs", text: data.lgas },
        { head: "Wards", text: data.wards },
        { head: "Polling Units", text: data.units },
      ].map((val, ind) => (
        <div
          key={ind}
          className="rounded-md px-5 py-6 border border-secondary/50 space-y-1"
        >
          <h2 className="text-xl xs:text-lg font-medium text-secondary">
            {val.head}
          </h2>

          <p className="text-primary text-4xl xs:text-3xl font-bold">
            {val.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TotalOverview;

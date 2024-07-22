"use client";

import { fetchTotalPollResults } from "@/data/result";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

function PUResultGraph({
  results,
}: {
  results?: { label: string; result: number }[];
}) {
  const [data, setData] = useState<{ label: string; result: number }[]>(
    results ?? []
  );
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (results) return;

    fetchTotalPollResults().then((data) => {
      if (data.error) return setError(data.error);

      if (data.data)
        setData(
          data.data.map((val) => ({ label: val.party, result: val.result }))
        );
    });
  }, []);

  return (
    <div className="w-full max-w-md aspect-square mx-auto">
      {error && <p className="m-auto">{error}</p>}

      {!error && (
        <PieChart
          tooltip={{ trigger: "item" }}
          colors={[
            "#73a580",
            "#a8ba9a",
            "#30d5c8",
            "#fffaca",
            "679289",
            "#c5e384",
            "#800000",
            "#ffff31",
          ]}
          loading={false}
          skipAnimation={true}
          slotProps={{
            legend: {
              labelStyle: { fontSize: 16 },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
            },
          }}
          series={[
            {
              data: [
                ...data.map((val, ind) => ({
                  id: ind,
                  label: val.label,
                  value: val.result,
                })),
              ],
              highlightScope: { faded: "global", highlight: "item" },
              outerRadius: "95%",
              innerRadius: 3,
              paddingAngle: 3,
              cornerRadius: 10,
              cx: "50%",
              cy: "50%",
            },
          ]}
        />
      )}
    </div>
  );
}

export default PUResultGraph;

import { PieChart } from "@mui/x-charts";

function PUResultGraph() {
  return (
    <div className="w-full max-w-md aspect-square mx-auto">
      <PieChart
        tooltip={{ trigger: "item" }}
        colors={[
          "#009933",
          "#e7ae27",
          "#576d2c",
          "#43123c",
          "254222",
          "#4f6e71",
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
        series={[
          {
            data: [
              { id: 0, value: 100, label: "Series 1" },
              { id: 0, value: 400, label: "Series 2" },
              { id: 0, value: 300, label: "Series 3" },
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
    </div>
  );
}

export default PUResultGraph;

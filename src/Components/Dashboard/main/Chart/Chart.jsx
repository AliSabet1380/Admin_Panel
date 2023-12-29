"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    visit: 100,
  },
  {
    name: "Thu",
    visit: 103,
  },
  {
    name: "Wed",
    visit: 120,
  },
  {
    name: "Thr",
    visit: 98,
  },
  {
    name: "Fri",
    visit: 105,
  },
  {
    name: "Sun",
    visit: 130,
  },
  {
    name: "Sat",
    visit: 127,
  },
];

const Chart = () => {
  return (
    <div className="h-[350px] bg-[var(--bgSoft)] p-[1.2rem] rounded-[0.5rem]">
      <h2 className="font-[200] text-[var(--textSoft)] mb-[1.2rem]">
        Weekly Visit Chart
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="visit" barSize={20} fill="#1166ff" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Chart;

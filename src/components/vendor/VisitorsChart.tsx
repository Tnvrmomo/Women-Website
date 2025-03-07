
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { VisitorStats } from "@/models/vendor";

interface VisitorsChartProps {
  data: VisitorStats[];
  period?: string;
}

const VisitorsChart: React.FC<VisitorsChartProps> = ({ data, period = "Weekly" }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Unique visitors</h3>
        <div className="text-sm text-gray-500">{period} ▼</div>
      </div>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 50000]}
              tickFormatter={(value) => value === 0 ? '' : value === 25000 ? '25K' : value === 50000 ? '50K' : ''}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "white", 
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
              formatter={(value) => [`${value.toLocaleString()} visitors`, ""]}
            />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#7c3aed" 
              strokeWidth={2}
              activeDot={{ r: 8, fill: "#7c3aed" }}
              dot={{ r: 4, fill: "#7c3aed" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsChart;


import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { SalesStatistics } from "@/models/vendor";

interface SalesChartProps {
  data: SalesStatistics;
  period?: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ data, period = "Monthly" }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Sales statistics</h3>
        <div className="text-sm text-gray-500">{period} ▼</div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.weeklyData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#4339ca", 
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px"
              }}
              labelStyle={{ color: "white" }}
              itemStyle={{ color: "white" }}
              formatter={(value) => [`$${value}`, ""]}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#4339ca" 
              strokeWidth={3} 
              activeDot={{ r: 8 }}
              dot={{ r: 4, fill: "#4339ca" }}
              name="Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="#10b981" 
              strokeWidth={3} 
              activeDot={{ r: 8 }}
              dot={{ r: 4, fill: "#10b981" }}
              name="Profit"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;

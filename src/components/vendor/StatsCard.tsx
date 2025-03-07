
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  icon?: React.ReactNode;
  className?: string;
  increasedBy?: string;
  bgColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subValue,
  icon,
  className = "",
  increasedBy,
  bgColor = "bg-blue-50"
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 flex items-center ${className}`}>
      {icon && <div className="mr-5">{icon}</div>}
      <div>
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <div className="flex items-baseline mt-1">
          <p className="text-2xl font-bold">{value}</p>
          {increasedBy && (
            <span className="ml-2 text-sm text-green-600">+{increasedBy}</span>
          )}
        </div>
        {subValue && <p className="text-sm text-gray-500 mt-1">{subValue}</p>}
      </div>
    </div>
  );
};

export default StatsCard;

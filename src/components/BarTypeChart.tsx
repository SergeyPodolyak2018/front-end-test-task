import { BarChartProps } from '../definitions/definitions';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarTypeChart = (props: BarChartProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <h2 className="text-xl font-semibold mb-4">{props.header}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer>
          <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={props.fill} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarTypeChart;

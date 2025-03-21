import { LineChartProps } from '../definitions/definitions';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const LineTypeChart = (props: LineChartProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <h2 className="text-xl font-semibold mb-4">{props.header}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer>
          <LineChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="years" stroke={props.stroke} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineTypeChart;

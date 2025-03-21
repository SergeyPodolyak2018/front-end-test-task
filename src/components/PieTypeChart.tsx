import { COLORS } from '../constants/constants';
import { PieChartProps } from '../definitions/definitions';
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const PieTypeChart = (props: PieChartProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <h2 className="text-xl font-semibold mb-4">{props.header}</h2>
      <div className={`h-[${props.height}px]`}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={props.data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {props.data.map((_: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieTypeChart;

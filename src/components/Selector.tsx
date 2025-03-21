import { SelectorProps } from '../definitions/definitions';

const Selector = ({ id, lable, values, active, cb }: SelectorProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2 dark:text-white dark:border-neutral-700"
      >
        {lable}
      </label>
      <select
        id={id}
        value={active}
        onChange={(e) => cb(e.target.value)}
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-50 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      >
        {values.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

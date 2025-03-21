import Selector from './Selector';
import { useSelectors } from '../hooks/useSelectors';

const SelectorBar = () => {
  const {
    sortedField,
    sortType,
    filterByAdaptaBility,
    filterByAffection,
    changeData,
  } = useSelectors();
  return (
    <div className="flex flex-row mt-5 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="mt-5 mb-5 ml-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Selector
          id="sort_by"
          lable="Sort by"
          values={[
            { name: 'Name', value: 'name' },
            { name: 'Origin', value: 'origin' },
          ]}
          active={sortedField}
          cb={(val) => {
            changeData('sort', val);
          }}
        />
        <Selector
          id="sort_order"
          lable="Sort order"
          values={[
            { name: 'ASC', value: 'asc' },
            { name: 'DESC', value: 'desc' },
          ]}
          active={sortType}
          cb={(val) => {
            changeData('direct', val);
          }}
        />
        <Selector
          id="filter_adapt"
          lable="Filter by adaptability"
          values={[
            { name: 'All', value: 0 },
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
            { name: '5', value: 5 },
          ]}
          active={filterByAdaptaBility}
          cb={(val) => {
            changeData('adapt', val);
          }}
        />
        <Selector
          id="filter_afect"
          lable="Filter by affection"
          values={[
            { name: 'All', value: 0 },
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
            { name: '5', value: 5 },
          ]}
          active={filterByAffection}
          cb={(val) => {
            changeData('afect', val);
          }}
        />
      </div>
    </div>
  );
};

export default SelectorBar;

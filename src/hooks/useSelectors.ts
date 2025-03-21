import { useAppDispatch, useAppSelector } from '../store/store';
import {
  setSortBy,
  setSortType,
  setSortAdaptability,
  setSortAffection,
} from '../store/slices/filtrSlice';

export const useSelectors = () => {
  const dispatch = useAppDispatch();
  const sortedField = useAppSelector((state) => state.filter.sortBy);
  const sortType = useAppSelector((state) => state.filter.sortType);
  const filterByAdaptaBility = useAppSelector(
    (state) => state.filter.filterByAdaptaBility
  );
  const filterByAffection = useAppSelector(
    (state) => state.filter.filterByAffection
  );

  const changeData = (
    type: 'sort' | 'direct' | 'adapt' | 'afect',
    value: string | number
  ) => {
    if (type === 'sort') dispatch(setSortBy(value));
    if (type === 'direct') dispatch(setSortType(value));
    if (type === 'adapt') dispatch(setSortAdaptability(+value));
    if (type === 'afect') dispatch(setSortAffection(+value));
  };

  return {
    sortedField,
    sortType,
    filterByAdaptaBility,
    filterByAffection,
    changeData,
  };
};

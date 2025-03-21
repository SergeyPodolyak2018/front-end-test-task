import { useAppDispatch, useAppSelector } from '../store/store';
import {
  setSortBy,
  setSortType,
  setSortAdaptability,
  setSortAffection,
} from '../store/slices/filtrSlice';

export const useSelectors = () => {
  const dispatch: any = useAppDispatch();
  const sortedField: string = useAppSelector((state) => state.filter.sortBy);
  const sortType: string = useAppSelector((state) => state.filter.sortType);
  const filterByAdaptaBility: string = useAppSelector(
    (state) => state.auth.filterByAdaptaBility
  );
  const filterByAffection: string = useAppSelector(
    (state) => state.auth.filterByAdaptaBility
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

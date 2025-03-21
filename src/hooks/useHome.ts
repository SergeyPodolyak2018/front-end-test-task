import React from 'react';
import { useGetAllBreadsQuery } from '../services/catsService';
import {
  getIndorCount,
  getLapCount,
  getLifeSpanMiddle,
  getOriginCount,
} from '../utils/utils';
import { useAppSelector } from '../store/store';
import { BarData, CatModel, LineBarData } from '../definitions/definitions';

export const useHome = () => {
  const { data, error, isLoading } = useGetAllBreadsQuery('');
  const [adaptabilityData, setAdaptabilityData] = React.useState<BarData[]>([]);
  const [affectionData, setAffectionData] = React.useState<BarData[]>([]);
  const [originData, setOriginData] = React.useState<BarData[]>([]);
  const [indoorData, setIndoorData] = React.useState<BarData[]>([]);
  const [lapData, setLapData] = React.useState<BarData[]>([]);
  const [lifeSpanData, setLifeSpanData] = React.useState<LineBarData[]>([]);
  const [filteredData, setFilteredData] = React.useState<CatModel[]>([]);

  const sortedField: string = useAppSelector((state) => state.filter.sortBy);
  const sortType: string = useAppSelector((state) => state.filter.sortType);
  const filterByAdaptaBility: number = useAppSelector(
    (state) => state.filter.filterByAdaptaBility
  );
  const filterByAffection: number = useAppSelector(
    (state) => state.filter.filterByAffection
  );

  React.useEffect(() => {
    if (!data || !data?.length) return;

    setAdaptabilityData(
      data.map((cat) => ({
        name: cat.name,
        value: cat.adaptability,
      }))
    );

    setAffectionData(
      data.map((cat) => ({
        name: cat.name,
        value: cat.affection_level,
      }))
    );

    setOriginData(getOriginCount(data));

    const indoorCount = getIndorCount(data);
    const lapCount = getLapCount(data);

    setIndoorData([
      { name: 'Indoor', value: indoorCount.indoor || 0 },
      { name: 'Outdoor', value: indoorCount.outdoor || 0 },
    ]);

    setLapData([
      { name: 'Lap Cat', value: lapCount.lap },
      { name: 'Not Lap Cat', value: lapCount.noLap },
    ]);

    setLifeSpanData(
      data.map((cat) => ({
        name: cat.name,
        years: getLifeSpanMiddle(cat.life_span),
      }))
    );
  }, [data]);

  React.useEffect(() => {
    if (!data || !data?.length) return;
    let filtered = [...data].sort((a, b) => {
      if (sortType === 'asc') {
        //@ts-ignore
        return a[sortedField].localeCompare(b[sortedField]);
      } else {
        //@ts-ignore
        return b[sortedField].localeCompare(a[sortedField]);
      }
    });
    filtered =
      filterByAdaptaBility === 0
        ? filtered
        : filtered.filter((el) => el.adaptability === filterByAdaptaBility);
    filtered =
      filterByAffection === 0
        ? filtered
        : filtered.filter((el) => el.affection_level === filterByAffection);
    setFilteredData(filtered);
  }, [data, sortedField, sortType, filterByAdaptaBility, filterByAffection]);

  return {
    cats: filteredData,
    error,
    isLoading,
    adaptabilityData,
    affectionData,
    originData,
    indoorData,
    lapData,
    lifeSpanData,
  };
};

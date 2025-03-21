import { userValidData } from '../constants/constants';
import { CatModel, IndoorCount, LapCount } from '../definitions/definitions';
export const chechUserData = (email: string, password: string): boolean => {
  if (email !== userValidData.email || password !== userValidData.password)
    return false;
  return true;
};

export const getAdaptability = (level: number): string => {
  return `${level}/5`;
};
export const getAffection = (level: number): string => {
  return `${level}/5`;
};
export const getLifeSpan = (year: string): string => {
  return `${year} years`;
};

export const getLifeSpanMiddle = (year: string): number => {
  const [from, to] = year.trim().split('-');
  const res = (parseInt(from) + parseInt(to)) / 2;
  return Math.round(res);
};

export const getIndorCount = (data: CatModel[]): IndoorCount => {
  const indoorCount = data.reduce(
    (acc: IndoorCount, cat) => {
      if (cat.indoor === 1) {
        acc.indoor = (acc.indoor || 0) + 1;
      } else {
        acc.outdoor = (acc.outdoor || 0) + 1;
      }
      return acc;
    },
    { indoor: 0, outdoor: 0 }
  );
  return indoorCount;
};

export const getLapCount = (data: CatModel[]): LapCount => {
  const lapCount = data.reduce(
    (acc: LapCount, cat) => {
      if (cat.lap === 1) {
        acc.lap = (acc.lap || 0) + 1;
      } else {
        acc.noLap = (acc.noLap || 0) + 1;
      }
      return acc;
    },
    { lap: 0, noLap: 0 }
  );
  return lapCount;
};

export const getOriginCount = (
  data: CatModel[]
): { name: string; value: number }[] => {
  const origin: { [key: string]: number } = { Unknown: 0 };
  for (const cat of data) {
    if (cat.origin) {
      if (origin[cat.origin]) {
        origin[cat.origin] = origin[cat.origin] + 1;
      } else {
        origin[cat.origin] = 1;
      }
    } else {
      origin['Unknown'] = origin['Unknown'] + 1;
    }
  }
  const rez = Object.entries(origin).map((el) => ({
    name: el[0],
    value: el[1],
  }));
  return rez.sort((a, b) => b.value - a.value).slice(0, 9);
};

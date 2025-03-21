import React from 'react';

export type PropsChildren = {
  children: React.ReactNode;
};

export type PropsProtectedRoute = PropsChildren & {
  inversion?: boolean;
};

export interface CatModel {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image?: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export type IndoorCount = { indoor: number; outdoor: number };
export type LapCount = { lap: number; noLap: number };

export type BarData = {
  name: string;
  value: number;
};

export type LineBarData = {
  name: string;
  years: number;
};

export type ChartProps = {
  data: BarData[];
  header: string;
};
export type LineChartProps = {
  data: LineBarData[];
  header: string;
  stroke: string;
};
export type BarChartProps = ChartProps & {
  fill: string;
};
export type PieChartProps = ChartProps & {
  height: number;
};

export type SelectorProps = {
  id: string;
  lable: string;
  values: { name: string; value: string | number }[];
  active: string | number;
  cb: (val: string | number) => void;
};

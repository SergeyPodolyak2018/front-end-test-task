import { useHome } from '../hooks/useHome';
import CatCard from '../components/CatCard';
import BarTypeChart from '../components/BarTypeChart';
import PieTypeChart from '../components/PieTypeChart';
import LineTypeChart from '../components/LineTypeChart';

import SelectorBar from '../components/SelectorBar';

const HomePage = () => {
  const {
    cats,
    isLoading,
    error,
    adaptabilityData,
    affectionData,
    originData,
    indoorData,
    lapData,
    lifeSpanData,
  } = useHome();

  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        {isLoading ? (
          <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" />
        ) : (
          <div className="text-red-500">Error loading cats data</div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cat Breeds Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BarTypeChart
          header="Adaptability Distribution"
          fill="#0088FE"
          data={adaptabilityData}
        />
        <BarTypeChart
          header="Affection Levels"
          fill="#00C49F"
          data={affectionData}
        />

        <PieTypeChart
          header="Indoor vs Outdoor Preference"
          data={indoorData}
          height={300}
        />

        <PieTypeChart header="Top Origins" data={originData} height={300} />

        <PieTypeChart
          header="Lap Cat Distribution"
          data={lapData}
          height={300}
        />
        <LineTypeChart
          header="Life Span Distribution"
          data={lifeSpanData}
          stroke="#8884d8"
        />
      </div>

      <SelectorBar />

      {/* Cats Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats && cats.map((cat) => <CatCard cat={cat} key={cat.id} />)}
      </div>
    </div>
  );
};

export default HomePage;

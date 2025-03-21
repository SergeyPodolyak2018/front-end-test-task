import { CatModel } from '../definitions/definitions';
import { getAdaptability, getAffection, getLifeSpan } from '../utils/utils';

const CatCard = ({ cat }: { cat: CatModel }) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
          Origin: {cat.origin || 'Unknown'}
        </span>
        <p className="mt-3 text-gray-500 line-clamp-3">
          {cat.description || 'No description available'}
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Adaptability:</span>
            <span>{getAdaptability(cat.adaptability)}</span>
          </div>
          <div className="flex justify-between">
            <span>Affection Level:</span>
            <span>{getAffection(cat.affection_level)}</span>
          </div>
          <div className="flex justify-between">
            <span>Life Span:</span>
            <span>{getLifeSpan(cat.life_span)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;

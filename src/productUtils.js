export function mapFertilizerType(type){
  return type === 'phosphorus' ? 'Fosforado' : type === 'nitrogen' ? 'Nitrogenado' : type;
};

export function formatPrice(price){
  return price.toLocaleString()+' €';
};
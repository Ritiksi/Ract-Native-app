import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

export default function HouseCard({ property }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100/50 group flex flex-col">
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-gray-800 shadow-sm border border-white/20">
                    Featured
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{property.title}</h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">{property.location}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6 px-1">
                    <div className="flex items-center gap-1.5">
                        <FaBed className="text-indigo-500 text-[15px]" />
                        <span className="font-semibold">{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaBath className="text-indigo-500 text-[15px]" />
                        <span className="font-semibold">{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaRulerCombined className="text-indigo-500 text-[15px]" />
                        <span className="font-semibold">{property.sqft} <span className="text-xs font-normal">sqft</span></span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Price</span>
                        <span className="text-lg font-black text-indigo-600 tracking-tight">{property.price}</span>
                    </div>
                    <button className="px-3.5 py-2 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 active:scale-95 whitespace-nowrap">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

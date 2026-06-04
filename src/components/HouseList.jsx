import HouseCard from './HouseCard';

const properties = [
    { id: 1, title: 'Modern Glass Villa', location: 'Beverly Hills, CA', price: '$4,500,000', beds: 4, baths: 5, sqft: 3500, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Luxury Penthouse', location: 'Manhattan, NY', price: '$8,200,000', beds: 3, baths: 3, sqft: 2800, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Seaside Estate', location: 'Malibu, CA', price: '$12,000,000', beds: 6, baths: 7, sqft: 5200, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Minimalist Retreat', location: 'Aspen, CO', price: '$3,100,000', beds: 3, baths: 2, sqft: 2100, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' }
];

export default function HouseList() {
    return (
        <div className="max-w-7xl mx-auto w-full pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Discover Properties</h2>
                    <p className="text-slate-500 mt-1 font-medium">Explore premium listings available for your cart</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 border-2 border-indigo-100 text-sm font-bold rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Cart (0)
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {properties.map(prop => <HouseCard key={prop.id} property={prop} />)}
            </div>
        </div>
    );
}

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../hooks/useCategories';

interface CategorySliderProps {
    categories: Category[];
    selectedCategory: string;
    onCategoryClick: (categoryId: string) => void;
    loading?: boolean;
}

const CategorySlider: React.FC<CategorySliderProps> = ({
    categories,
    selectedCategory,
    onCategoryClick,
    loading
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return (
            <div className="w-full py-6 px-4 bg-white border-b border-cafe-beige">
                <div className="flex space-x-4 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-xl animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    const allCategory = {
        id: 'all',
        name: 'All Items',
        icon: '🍽️',
        active: true,
        sort_order: 0,
        created_at: '',
        updated_at: ''
    } as Category;

    const displayCategories = [allCategory, ...categories];

    return (
        <div className="relative group bg-white border-b border-cafe-beige py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Scroll Buttons - Visible on hover/desktop */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 shadow-lg rounded-full border border-cafe-beige opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex hover:bg-cafe-beige text-cafe-brown"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 shadow-lg rounded-full border border-cafe-beige opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:flex hover:bg-cafe-beige text-cafe-brown"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slider Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {displayCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryClick(category.id)}
                            className={`flex-shrink-0 w-28 md:w-32 snap-start flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 ${selectedCategory === category.id
                                ? 'border-cafe-brown bg-cafe-brown text-white shadow-lg scale-105'
                                : 'border-cafe-beige bg-cafe-cream text-cafe-brown hover:border-cafe-gold hover:shadow-md'
                                }`}
                        >

                            <span className={`text-sm font-medium text-center leading-tight ${selectedCategory === category.id ? 'text-white' : 'text-cafe-brown'
                                }`}>
                                {category.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;

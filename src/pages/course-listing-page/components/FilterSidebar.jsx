import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  selectedLevels,
  setSelectedLevels,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  selectedDuration,
  setSelectedDuration,
  onClearFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    level: true,
    price: true,
    rating: true,
    duration: true
  });

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = [
    { value: 'short', label: 'Short (0-10 hours)' },
    { value: 'medium', label: 'Medium (10-30 hours)' },
    { value: 'long', label: 'Long (30+ hours)' }
  ];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories((prev) =>
      prev?.includes(categoryName)
        ? prev?.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleLevelChange = (level) => {
    setSelectedLevels((prev) =>
      prev?.includes(level) ? prev?.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(selectedDuration === duration ? '' : duration);
  };

  const activeFiltersCount =
    selectedCategories?.length +
    selectedLevels?.length +
    (minRating > 0 ? 1 : 0) +
    (selectedDuration ? 1 : 0);

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-foreground">Filters</h2>
        {activeFiltersCount > 0 && (
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <span>Clear all</span>
            <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {activeFiltersCount}
            </span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-foreground">Category</span>
            <Icon
              name={expandedSections?.categories ? 'ChevronUp' : 'ChevronDown'}
              size={18}
            />
          </button>
          {expandedSections?.categories && (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {categories?.map((category) => (
                <div key={category?.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${category?.id}`}
                    checked={selectedCategories?.includes(category?.name)}
                    onChange={() => handleCategoryChange(category?.name)}
                  />
                  <label
                    htmlFor={`category-${category?.id}`}
                    className="text-sm text-foreground cursor-pointer flex-1 flex items-center justify-between"
                  >
                    <span>{category?.name}</span>
                    <span className="text-xs text-text-secondary">
                      ({category?.count})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <button
            onClick={() => toggleSection('level')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-foreground">Level</span>
            <Icon
              name={expandedSections?.level ? 'ChevronUp' : 'ChevronDown'}
              size={18}
            />
          </button>
          {expandedSections?.level && (
            <div className="space-y-2">
              {levels?.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <Checkbox
                    id={`level-${level}`}
                    checked={selectedLevels?.includes(level)}
                    onChange={() => handleLevelChange(level)}
                  />
                  <label
                    htmlFor={`level-${level}`}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-foreground">Price Range</span>
            <Icon
              name={expandedSections?.price ? 'ChevronUp' : 'ChevronDown'}
              size={18}
            />
          </button>
          {expandedSections?.price && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">${priceRange?.[0]}</span>
                <span className="text-text-secondary">${priceRange?.[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={priceRange?.[1]}
                onChange={(e) => setPriceRange([0, parseInt(e?.target?.value)])}
                className="w-full"
                aria-label="Price range slider"
              />
            </div>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <button
            onClick={() => toggleSection('rating')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-foreground">Rating</span>
            <Icon
              name={expandedSections?.rating ? 'ChevronUp' : 'ChevronDown'}
              size={18}
            />
          </button>
          {expandedSections?.rating && (
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0]?.map((rating) => (
                <button
                  key={rating}
                  onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    minRating === rating
                      ? 'bg-primary/10 border border-primary' :'hover:bg-muted border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={
                            i < Math.floor(rating)
                              ? 'text-yellow-400 fill-yellow-400' :'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground">
                      {rating} & up
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <button
            onClick={() => toggleSection('duration')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-foreground">Duration</span>
            <Icon
              name={expandedSections?.duration ? 'ChevronUp' : 'ChevronDown'}
              size={18}
            />
          </button>
          {expandedSections?.duration && (
            <div className="space-y-2">
              {durations?.map((duration) => (
                <div key={duration?.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`duration-${duration?.value}`}
                    checked={selectedDuration === duration?.value}
                    onChange={() => handleDurationChange(duration?.value)}
                  />
                  <label
                    htmlFor={`duration-${duration?.value}`}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {duration?.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
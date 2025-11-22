import Select from '../../../components/ui/Select';

const SortDropdown = ({ sortBy, setSortBy }) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <Select
      value={sortBy}
      onChange={(e) => setSortBy(e?.target?.value)}
      options={sortOptions}
      className="w-48"
      aria-label="Sort courses"
    />
  );
};

export default SortDropdown;
import Icon from '../../../components/AppIcon';

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
      <button
        onClick={() => setViewMode('grid')}
        className={`p-2 rounded transition-colors ${
          viewMode === 'grid' ?'bg-card shadow-sm' :'hover:bg-card/50'
        }`}
        aria-label="Grid view"
      >
        <Icon name="Grid" size={18} className={viewMode === 'grid' ? 'text-primary' : 'text-text-secondary'} />
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`p-2 rounded transition-colors ${
          viewMode === 'list' ?'bg-card shadow-sm' :'hover:bg-card/50'
        }`}
        aria-label="List view"
      >
        <Icon name="List" size={18} className={viewMode === 'list' ? 'text-primary' : 'text-text-secondary'} />
      </button>
    </div>
  );
};

export default ViewToggle;
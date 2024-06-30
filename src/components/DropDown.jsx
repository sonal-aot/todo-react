import '../styles/dropdown.css';

const DropDown = ({ sortOption, setSortOption }) => {
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="sortDropdown">
            <label htmlFor="sortOrder">Sort by: </label>
            <select id="sortOrder" value={sortOption} onChange={handleSortChange}>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
            </select>
        </div>
    );
};

export default DropDown;

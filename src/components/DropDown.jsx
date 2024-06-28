import '../styles/dropdown.css'

const DropDown = () => {

    return (
        <div className="sortDropdown">
            <label htmlFor="sortOrder">Sort by: </label>
            <select id="sortOrder">
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
            </select>
        </div>
    )
}

export default DropDown;

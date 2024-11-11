const Search = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value) // Update the search term in the parent component
  }

  

  return (
    <input
      type="text"
      placeholder="Search Vehicles..."
      value={searchTerm}
      onChange={handleChange}
      className="search-input"
    />
  )
}

export default Search

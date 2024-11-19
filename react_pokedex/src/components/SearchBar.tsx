const SearchBar = () => {
  return (
    <form className="d-flex flex-column flex-md-row p-0 m-0 mb-5" role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

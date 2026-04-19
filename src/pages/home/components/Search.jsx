//
export default function Search({ searchKey, setSearchKey }) {
  return (
    <div className="user-search-area">
      <input
        type="text"
        className="user-search-text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search user..."
      />
      <i className="fa fa-search user-search-btn" aria-hidden="true"></i>
    </div>
  );
}

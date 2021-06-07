import React, { Component } from "react";
import SearchField from "react-search-field";
import "../css/search.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="searchContainer">
        <SearchField
          placeholder="Search..."
          // onChange={onChange}
          searchText="This is initial search text"
          classNames="searchContent"
        />
      </div>
    );
  }
}

export default Search;

import './search-box.styles.css';
import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    const { placeholder } = this.props;
    const { className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;

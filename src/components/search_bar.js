import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''};
  }
  render() {
    return (
      <div className='search_bar'>
        <input onChange = {evt => this.onSearchVideo(evt.target.value)}/>
      </div>
    );
  }

  onSearchVideo(term) {
    this.setState({term: term});
    this.props.onVideoSearch(term);
  }
}

export default SearchBar;

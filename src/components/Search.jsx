import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'all',
    };
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.findMovie(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.findMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div>
        <div className='input-field col s12'>
          <input
            value={this.state.search}
            type='search'
            name='search'
            className='validate'
            placeholder='Search'
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <div className='filter'>
            <p>
              <label>
                <input
                  name='type'
                  type='radio'
                  value='all'
                  onChange={this.handleFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name='type'
                  type='radio'
                  value='movie'
                  onChange={this.handleFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name='type'
                  type='radio'
                  value='series'
                  onChange={this.handleFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series only</span>
              </label>
            </p>
          </div>
          <button
            className=' btn indigo darken-3 search-btn'
            onClick={() =>
              this.props.findMovie(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

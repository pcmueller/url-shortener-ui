import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: '',
      error: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title
    }

    if (this.state.urlToShorten && this.state.title) {
      this.props.submitNewUrl(newUrl);
    } else {
      this.setState({ error: 'Please provide both a title and a URL to shorten!'})
    }

    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
        {this.state.error.length > 0 && 
          <div>
            <h3 className='error'>
              {this.state.error}
            </h3>
          </div>
        }
        </form>
    )
  }
}

export default UrlForm;

import React, { Component } from 'react';
import './App.css';
import { addUrl, getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    this.retrieveAllUrls();
  }

  retrieveAllUrls = () => {
    getUrls()
      .then(data => this.setState({
        urls: data.urls,
        error: ''
      }))
      .catch(error => this.setState({ 
        error: "Sorry, we're unable to retrieve this data." 
      }))
  }

  submitNewUrl = (input) => {
    addUrl(input)
      .then(response => this.setState({
        urls: [ ...this.state.urls, response ],
        error: ''
      }))
      .catch(error => this.setState({ 
        error: "Sorry, we're unable to process your submission." 
      }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submitNewUrl={this.submitNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;

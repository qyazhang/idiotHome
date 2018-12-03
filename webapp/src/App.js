import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import apis from './api.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.apiBaseUrl = apis.baseUrl;
    this.renderOneApiRecord = this.renderOneApiRecord.bind(this);
  }
  
  // see ./api.json for the existing apis
  renderApis = apis.api.map((eachApi) => 
    this.renderOneApiRecord(eachApi)
  );

  renderOneApiRecord(api) {
    const renderButtons = api.apiList.map((apiName) => 
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          fetch(`${this.apiBaseUrl}/${api.apiPath}/${apiName}`, {
            method: 'GET'
          });
        }}
        key={`${api.apiPath}/${apiName}`}
        className="idiotHome-webapp-controlButton"
      >
        {apiName}
      </Button>
    );
    return (
      <div className="idioHome-webapp-api" key={`${api.apiPath}`}>
        {api.apiPath}
        <div className="idioHome-webapp-api-buttons">
          {renderButtons}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="idiotHome-webapp">
        {this.renderApis}
      </div>
    );
  }
}

export default App;

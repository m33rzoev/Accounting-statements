import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/app/app";
import data from "./data/data.json"


ReactDOM.render(
    <App data={data} />,
  document.getElementById('root')
);


import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

	const [data, setData] = useState(null);
	const [requestParams, setRequestParams] = useState({});
	const [headers, setHeaders] = useState(null);

	useEffect(() => {
		console.log('testing useEffect 1, 2, 3')
		// if using request params to make api request use it here
	}, [])

    const callApi = async (url, method = 'GET') => {

			let newData = await axios ({
				method: method,
				url: url,
			})

			let params = {
				url,
				method
			}

    setData(newData.data.results);
		setRequestParams(params);
		setHeaders(newData.headers);
		
  }
    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} headers={headers}/>
        <Footer />
      </>
    );
};

export default App;

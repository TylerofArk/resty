import { useReducer, useEffect } from 'react';
import { reducer } from './components/reducer/reducer';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import axios from 'axios';

const initialState = {
  data: null,
  requestParams: {},
  history: [],
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let fetch = async () => {
      let result = await axios(state.requestParams);
      console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      setData(data);
      updateHistory(state.requestParams, data);
    }
    if (state.requestParams && state.requestParams.method) fetch();
  }, [state.requestParams])

  function setReqParams(requestParams) {
    dispatch({
      type: 'SET_REQ_PARAMS',
      payload: requestParams,
    });
  }

  function setData(data) {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  }

  function updateHistory(requestParams, data) {
    let reqHistory = {
      method: requestParams.method,
      url: requestParams.url,
      data: data
    }
    dispatch({
      type: 'UPDATE_HISTORY',
      payload: reqHistory
    });
  }

  function handleApi(requestParams) {
    setReqParams(requestParams);
  }

    return (
      <>
        <Header />
        <div className='request-meth'>Request Method: {state.requestParams.method}</div>
        <div className='url'>URL: {state.requestParams.url}</div>
        <Form handleApiCall={handleApi} />
        <History history={state.history} />
        <Results data={state.data} headers={state.headers}/>
        <Footer />
      </>
    );
}

export default App;
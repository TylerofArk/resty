import './style.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => { 
  return (
    <>
    <section>
        {props.data ?
        (<>
          <span data-testid='results'>
          <JSONPretty data={props.headers}/>
          <JSONPretty data={props.data}/>
          </span>
        </>) :
        (<span>Awaiting Request</span>)}
      </section>
    </>
    );
}

export default Results;

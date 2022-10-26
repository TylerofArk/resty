import './style.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {
  let {data} = props;
    return (
      <section>
        {data ?
        (<>
          <span data-testid="results">
          <JSONPretty data={data}/>
          </span>
        </>) :
        (<span>Awaiting Request</span>)}
      </section>
    );
}
export default Results;

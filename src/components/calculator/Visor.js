import History from './VisorHistory';
import Result from './VisorResult';

function Visor({ history, result }) {
    return (
        <div className="visor">
            <History history={history} />
            <Result result={result} />
        </div>
    );
}

export default Visor;
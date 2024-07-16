import Visor from './Visor';
import ContainerButtons from './ContainerButtons';
import HeaderButtonsContainer from './HeaderButtonsContainer';
import HeaderButton from './HeaderButton';
import NumberButtonsContainer from './NumberButtonsContainer';
import NumberButton from './NumberButton';

import { useState } from 'react';
// import { useEffect } from 'react';
import { FaPlus, FaMinus, FaDivide, FaSuperscript, FaEquals, FaBackspace } from 'react-icons/fa';

function Calculator() {
    const [history, setHistory] = useState('');
    const [result, setResult] = useState('0');

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyPress);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyPress);
    //     };
    // }, []);

    // function handleKeyPress(e) {
    //     const possibleOpKeys = ['+', '-', '*', '/', '^', '=', 'Enter', 'Backspace'];
    //     let key = e.key;

    //     if(isNaN(key) && !possibleOpKeys.includes(key)) return true;
    //     if (key == 'Enter') key = '=';

    //     if(!isNaN(key)) {
    //         incrementHistory(key);
    //         return true;
    //     }

    //     if(key == 'Backspace') {
    //         decrementHistory();
    //         return true;
    //     }

    //     if(possibleOpKeys.includes(key)) {
    //         performCalculation({ operacao: key, textToHistory: key });
    //         return true;
    //     }

    //     return true;
    // }

    function incrementHistory(str) {
        let currentHistory = String(history);
        let hasEqual = currentHistory.includes('=');

        if (hasEqual) {
            setHistory(str);
            return true;
        }

        let newHistory = currentHistory + str;
        setHistory(newHistory);
    }

    function decrementHistory() {
        let currentHistory = history;
        let newHistory = currentHistory.slice(0, -1);
        setHistory(newHistory);
    }

    function cleanAll() {
        setHistory('');
        setResult('0');
    }

    function performCalculation({ operacao, textToHistory }) {
        let currentHistory = String(history);
        let currentResult = String(result);
        let hasEqual = currentHistory.includes('=');

        if (currentHistory === '' && operacao === '=') return true;

        if (hasEqual) {
            let newInit = isNaN(currentResult) ? '0' : currentResult;
            setHistory(newInit + textToHistory);
        } else {
            incrementHistory(textToHistory);
        }

        if (operacao !== '=') return true;

        let newResult = eval(currentHistory.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^(\d+)/g, "**$1").replace(/=/g, ''));
        if (newResult === Infinity || isNaN(newResult)) newResult = 'Error';

        newResult = String(newResult).length > 10 ? newResult.toPrecision(10) : newResult;
        setResult(String(newResult));

        return true;
    }

    return (
        <div className="calculator">
            <Visor history={history} result={result} />
            <ContainerButtons>
                <HeaderButtonsContainer>
                    <HeaderButton title="Sum" textToHistory="+" operacao="+" special={true} callbackClick={performCalculation}>
                        <FaPlus />
                    </HeaderButton>
                    <HeaderButton title="Subtraction" textToHistory="-" operacao="-" special={false} callbackClick={performCalculation}>
                        <FaMinus />
                    </HeaderButton>
                    <HeaderButton title="Multiplication" textToHistory="x" operacao="*" special={false} callbackClick={performCalculation}>
                        <FaPlus />
                    </HeaderButton>
                    <HeaderButton title="Division" textToHistory="÷" operacao="/" special={false} callbackClick={performCalculation}>
                        <FaDivide />
                    </HeaderButton>
                    <HeaderButton title="Exponentiation" textToHistory="^" operacao="^" special={false} callbackClick={performCalculation}>
                        <FaSuperscript />
                    </HeaderButton>
                    <HeaderButton title="Equal" textToHistory="=" operacao="=" special={true} callbackClick={performCalculation}>
                        <FaEquals />
                    </HeaderButton>
                </HeaderButtonsContainer>
                <NumberButtonsContainer>
                    <NumberButton title='Number 1' number={1} special={false} callbackClick={incrementHistory} children={"1"} />
                    <NumberButton title='Number 2' number={2} special={false} callbackClick={incrementHistory} children={"2"} />
                    <NumberButton title='Number 3' number={3} special={false} callbackClick={incrementHistory} children={"3"} />
                    <NumberButton title='Number 4' number={4} special={false} callbackClick={incrementHistory} children={"4"} />
                    <NumberButton title='Number 5' number={5} special={false} callbackClick={incrementHistory} children={"5"} />
                    <NumberButton title='Number 6' number={6} special={false} callbackClick={incrementHistory} children={"6"} />
                    <NumberButton title='Number 7' number={7} special={false} callbackClick={incrementHistory} children={"7"} />
                    <NumberButton title='Number 8' number={8} special={false} callbackClick={incrementHistory} children={"8"} />
                    <NumberButton title='Number 9' number={9} special={false} callbackClick={incrementHistory} children={"9"} />
                    <NumberButton title='Clean All' special={true} callbackClick={cleanAll} children={"C"} />
                    <NumberButton title='Number 0' number={0} special={false} callbackClick={incrementHistory} children={"0"} />
                    <NumberButton title='Clean Last' special={true} callbackClick={decrementHistory} >
                        <FaBackspace />
                    </NumberButton>
                </NumberButtonsContainer>
            </ContainerButtons>
        </div>
    );
}

export default Calculator;
function HeaderButton({ title, operacao, textToHistory, children, special, callbackClick }) {
    return (
        <label 
        className={`calculator-header-button ${special ? 'special' : ''}`} 
        alt={title} title={title} 
        operacao={operacao}
        onClick={() => callbackClick({ operacao: operacao, textToHistory: textToHistory })}>
            { children }
        </label>
    );
}

export default HeaderButton;
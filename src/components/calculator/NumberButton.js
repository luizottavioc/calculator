function NumberButton({ title, number, children, special, callbackClick }) {
    return (
        <label
            className={`calculator-number-buttons ${special ? 'special' : ''}`}
            alt={title} title={title}
            number={number}
            onClick={(e) => callbackClick(number)}>
            {children}
        </label>
    );
}

export default NumberButton;
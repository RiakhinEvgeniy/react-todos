function ResetButton({onClick}) {
    const styleBTNReset = { backgroundColor: 'lightgreen', color: 'black' };
    return (
        <div>
            <button style={styleBTNReset} onClick={onClick}>Reset</button>
        </div>
    )
}

export default ResetButton;
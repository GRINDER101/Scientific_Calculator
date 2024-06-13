import './keypad.css'

const Keypad = ({ Showthesign, expandedList }) => {

    const keys = ['AC', 'C', '%', '/', '7', '8',
        '9', '*', '4', '5', '6', '-', '1', '2', '3',
        '+', '<>', '0', '.', '=']

    const expandedkeys = ['cos', 'log', '(', ')', 'DEG', 'sin', 'tan', 'rootsq', 'ln',
        'INV', 'AC', 'C', '%', 'pi', '/', '7', '8',
        '9', 'e', '*', '4', '5', '6', 'n!', '-', '1', '2', '3', '^',
        '+', '<>', '0', '.', ' ', '=']

    return (
        <div >
            {expandedList ? <div className="expanded-keypad">{expandedkeys.map((expandedkey, index) => {
                return (<button onClick={Showthesign} key={index}>{expandedkey}</button>)
            })}</div> : <div className="keypad">{keys.map((key, index) => {
                return (<button onClick={Showthesign} key={index}>{key}</button>)
            })}</div>}
        </div >
    )
}


export default Keypad



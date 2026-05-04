
interface InputAreaProps {
    word: string;
    onMatch: () => void;
}

const InputArea = ({word, onMatch}: InputAreaProps) => {
    return (
        <input 
            autoFocus 
            id="input-area" 
            type="text" 
            style={{
                fontFamily: 'Doto',
                color: "#AAFF00",
                backgroundColor: "black",
                fontSize: 20,
                borderColor: "#AAFF00",
                borderStyle: "solid"
            }}
            className="p-3 text-center"
            onKeyUp={(_) => {
                if ((document.getElementById("input-area") as HTMLInputElement).value === word) {
                    onMatch()
                }
            }}
        ></input>
    )
}

export default InputArea
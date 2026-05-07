import { useEffect, useRef, type KeyboardEvent, type RefObject } from "react";

interface InputAreaProps {
    word: string;
    gameOver: boolean;
    onKeyUp: (e: KeyboardEvent) => void;
    onMatch: () => void;
}

const InputArea = ({word, gameOver, onKeyUp, onMatch}: InputAreaProps) => {
    const ref: RefObject<HTMLInputElement | null> = useRef(null);

    useEffect(() => {
        let inputArea = ref.current;
        if (inputArea) {
            if (gameOver) {
                inputArea.disabled = true;
            } else {
                inputArea.disabled = false;
                inputArea.value = "";
                inputArea.focus();
            }
        }
    }, [gameOver]);

    return (
        <input
            ref={ref}
            disabled={gameOver}
            autoFocus 
            id="input-area" 
            type="text" 
            style={{
                fontFamily: 'Doto',
                color: "#AAFF00",
                backgroundColor: "black",
                fontSize: 20,
                fontWeight: "bold",
                borderColor: "#AAFF00",
                borderStyle: "solid",
            }}
            className="p-3 text-center"
            onKeyUp={(e) => {
                onKeyUp(e);
                if (e.currentTarget.value === word) {
                    e.currentTarget.value = "";
                    onMatch();
                }
            }}
        ></input>
    )
}

export default InputArea
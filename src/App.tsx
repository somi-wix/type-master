import InputArea from "./components/InputArea";
import WordPanel from "./components/WordPanel";

import { randomWord } from "./utils"
import "./index.css";
import { useEffect, useState } from "react";

function App() {
	const time = 10;
	const [word, setWord] = useState(randomWord("easy"));
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(time);

	const handleMatch = () => {
		(document.getElementById("input-area") as HTMLInputElement).value = "";
		setWord(randomWord("easy"));
		setScore(score + 1);
	};

	useEffect(() => {
		let startTime = Date.now();
		let endTime = startTime + (time * 1000);

		const interval = setInterval(() => {
			setTimeLeft(Math.max(0, Math.ceil((endTime - Date.now()) / 1000)))
		}, 1000);

		const timeOut = setTimeout(() => {
			(document.getElementById("input-area") as HTMLInputElement).disabled = true
		}, time * 1000)

		return () => {
			clearInterval(interval);
			clearTimeout(timeOut);
		}
	}, []);

	return (
		<div
			style={{
				borderColor: "#AAFF00",
				borderStyle: "solid"
			}} 
			className="rounded-3 mt-5 py-3 gap-3 d-flex flex-column justify-content-center w-75 align-items-center">
			<h2 className="default-style">TypeMaster v1.0.0</h2>
			<WordPanel word={word}/>
			<InputArea word={word} onMatch={handleMatch}/>
			<h3 className="default-style">Time Left: {timeLeft}</h3>
			<div className="d-flex justify-content-between w-100 p-3">
				<h3 className="default-style">Score: {score}</h3>
				<h3 className="default-style">Keystrokes Per Second: {0}</h3>
			</div>
		</div>
	)
}

export default App;
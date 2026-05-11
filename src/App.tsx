import InputArea from "./components/InputArea";
import WordPanel from "./components/WordPanel";
import PressEnterLabel from "./components/PressEnterLabel";

import { randomWord, durationFor } from "./utils"
import "./index.css";
import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent as ReactKeyboardEvent, type RefObject } from "react";
import LeaderboardTable from "./components/LeaderboardTable";
import DifficultySelect from "./components/DifficultySelect";

function App() {
	const [difficulty, setDifficulty] = useState("easy");
	const duration = durationFor(difficulty);

	const [keyStrokes, setKeyStrokes] = useState(0);
	const [avgPerSecond, setAvgPerSecond] = useState(0);
	const [highestAvgPerSecond, setHighestAvgPerSecond] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [timeLeft, setTimeLeft] = useState(duration);
	const [round, setRound] = useState(0);
	const [word, setWord] = useState(randomWord(difficulty));
	const [leaderBoard, setLeaderBoard] = useState<
		{
			score: number,
			startTime: number,
			highestAvgPerSecond: number
		}[]
	>([]);
	
	const intervalID = useRef(-1);
	const timeoutID = useRef(-1);
	const startTime = useRef(0);

	const init = () => {
		setWord(randomWord(difficulty));
		setGameOver(false);
		setScore(0);
		setKeyStrokes(0);
		setAvgPerSecond(0);
		setHighestAvgPerSecond(0);
		setTimeLeft(duration);

		startTime.current = Date.now();

		if (intervalID.current > 0) {
			clearInterval(intervalID.current);
		}
		intervalID.current = (setInterval(() => {
			setTimeLeft(Math.max(0, Math.ceil((startTime.current + duration * 1000 - Date.now()) / 1000)));
		}, 100));

		if (timeoutID.current > 0) {
			clearTimeout(timeoutID.current);
		}
		timeoutID.current = (setTimeout(() => {
			setGameOver(true);
		}, 1000 * duration));

		return () => {
			clearInterval(intervalID.current);
			clearTimeout(timeoutID.current);
		};
	};

	const handleInput = (e: ReactKeyboardEvent) => {
		if (e.key.length == 1) {
			setKeyStrokes(keyStrokes + 1);
		}
	};

	const handleMatch = () => {
		setWord(_ => randomWord(difficulty));
		setScore(score => score + 1);
		const timeElapsed = duration - timeLeft;
		const avgPerSecond = timeElapsed == 0 ? 0 : keyStrokes / timeElapsed;
		setAvgPerSecond(avgPerSecond);
		if (avgPerSecond > highestAvgPerSecond) {
			setHighestAvgPerSecond(avgPerSecond);
		}
	};

	const handleDifficultyChange = (e: any) => {
		setDifficulty(e.target.value);
	}

	useEffect(init, [round, difficulty]);
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				setRound(round => round + 1);
				setGameOver(_ => false);
			}
		};
		if (gameOver) {
			document.addEventListener("keyup", onKey)
			setLeaderBoard(leaderBoard.concat([{
				score,
				highestAvgPerSecond,
				startTime: startTime.current
			}]))
		}
		return () => document.removeEventListener("keyup", onKey);
	}, [gameOver]);

	return (
		<>
			<div
				style={{
					borderColor: "#AAFF00",
					borderStyle: "solid"
				}} 
				className="rounded-3 mt-5 py-3 gap-3 d-flex flex-column justify-content-center w-75 align-items-center">
				<h2 className="default-style">TypeMaster v1.0.0</h2>
				<DifficultySelect onChange={handleDifficultyChange}/>
				<WordPanel word={word}/>
				<InputArea word={word} gameOver={gameOver} onKeyUp={handleInput} onMatch={handleMatch}/>
				<h3 className="default-style">Time Left: {timeLeft}</h3>
				<div className="d-flex justify-content-between w-100 p-3">
					<h3 className="default-style">Score: {score}</h3>
					<h3 className="default-style">Average Per Second: {avgPerSecond.toFixed(2)}</h3>
				</div>
				<PressEnterLabel gameOver={gameOver}/>
				<div>
					<LeaderboardTable board={leaderBoard}/>
				</div>
			</div>
		</>
	)
}

export default App;
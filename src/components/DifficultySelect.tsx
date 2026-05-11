import { useId } from "react";
import "../index.css";

interface DifficultySelectProps {
    onChange: (e: any) => void;
}

const DifficultySelect = ({onChange}: DifficultySelectProps) => {
    const selectId = useId();
    return (
        <select onChange={onChange} id={selectId} className="dropdown-style">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="very_hard">Very Hard</option>
            <option value="insane">Insane</option>
        </select>
    )
}

export default DifficultySelect;
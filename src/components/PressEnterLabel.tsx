interface PressEnterLabelProps {
    gameOver: boolean;
}

const PressEnterLabel = ({gameOver}: PressEnterLabelProps) => {
    return (
        <span 
            className="default-style"
            hidden={!gameOver}>Press Enter to Restart</span>
    );
}

export default PressEnterLabel;
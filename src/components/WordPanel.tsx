import "../index.css";

interface WordPanelProps {
    word: string
}

const WordPanel = ({word}: WordPanelProps) => {
  return (
    <div className="default-style" style={{
        fontSize: 50
    }}>{word}</div>
  )
}

export default WordPanel
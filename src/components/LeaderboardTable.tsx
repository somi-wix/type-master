interface LeaderboardTableProps {
    board: {score: number, startTime: number, highestAvgPerSecond: number}[]
}

interface TableRowProps {
    key: number;
    score: number; 
    startTime: number; 
    highestAvgPerSecond: number
}

const TableRow = ({key, score, startTime, highestAvgPerSecond}: TableRowProps) => {
    return <tr>
        <td>{new Date(startTime).toDateString()}</td>
        <td>{score}</td>
        <td>{highestAvgPerSecond}</td>
    </tr>
}

const LeaderboardTable = ({board}: LeaderboardTableProps) => {
    let children = [];
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        children.push(
            <TableRow key={i} {...row}/>
        );
    }
    
    return (
        <table className="default-style table-style">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Score</th>
                    <th>Highest Average Characters per Second</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
};

export default LeaderboardTable;
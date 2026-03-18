export default function Square({ value, onSquareClick, xIsNext, winner }) {
    const backGroundColor = (value === 'X' ? 'bg-red-200' : value === 'O' ? 'bg-green-200' : 'bg-white');
    const turnColor = winner ? (winner === 'X' ? 'border-red-500' : 'border-green-500') : (xIsNext ? 'border-red-500' : 'border-green-500');
    return (
            <button
                className={`w-24 h-24 border-2 ${turnColor} text-4xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all duration-500 ${backGroundColor}`}
                onClick={onSquareClick}
            >
                {value}
            </button>
    );
}
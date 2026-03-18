import React, { useState } from 'react';
import Square from './Square.jsx';
import { calculateWinner } from './winner.js';

export default function App(){
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));


	function handleClick(i){
		if(squares[i] || calculateWinner(squares)) return;

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext?"X":"O";
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X": "O"}`;
	const borderColor = winner
		?(winner==='X'?'border-red-500':'border-green-500')
		:(xIsNext?'border-red-500':'border-green-500');

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 font-sans">
			<div className={`mb-6 text-3xl font-bold ${winner? 'text-green-600 animate-bounce' : 'text-slate-700'}`}>
				{status}
			</div>

			<div  className={`grid grid-cols-3 gap-0 border-4 border-slate-800 shadow-2xl rounded-sm overflow-hidden transition-colors duration-500 ${borderColor}`}>
				{squares.map((value,index)=>(
					<Square
						key = {index}
						value = {value}
						onSquareClick={() => handleClick(index)}
						xIsNext={xIsNext}
						winner={winner}
					/>
				))}
			</div>

			<button
				className="mt-10 px-8 py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transform hover:scale-105 transition-all shadow-lg"
				onClick={()=>setSquares(Array(9).fill(null))}
			>
				RESTART GAME
			</button>
		</div>
	);
}
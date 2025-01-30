import { useState } from "react";
import solveWaterJug from "./solveWaterJug";

interface Step {
	x: number;
	y: number;
	action: string;
}

const WaterJugSolver: React.FC = () => {
	const [x, setX] = useState<number>(2);
	const [y, setY] = useState<number>(10);
	const [z, setZ] = useState<number>(4);
	const [solution, setSolution] = useState<Step[]>([]);
	const [error, setError] = useState<string>("");

	const validateInput = (value: string): number => {
		const num = parseInt(value, 10);
		return isNaN(num) || num < 0 ? 0 : num;
	};

	const handleSolve = () => {
		setError("");
		setSolution([]);

		// Basic validations
		if (x <= 0 || y <= 0 || z <= 0) {
			setError("Every value should be positive integer");
			return;
		}

		// This is a mathematical validation for the problem
		const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
		if (z > x + y || z % gcd(x, y) !== 0) {
			setError("No solution");
			return;
		}

		// Here we run the algorithm
		const result = solveWaterJug(x, y, z);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		result ? setSolution(result) : setError("No solution.");
	};

	return (
		<div className="container">
			<h1>Water Jug Challenge</h1>

			<div className="input-group">
				<label>
					Jug X:
					<input type="number" value={x} onChange={e => setX(validateInput(e.target.value))} min="1" />
				</label>

				<label>
					Jug Y:
					<input type="number" value={y} onChange={e => setY(validateInput(e.target.value))} min="1" />
				</label>

				<label>
					Cantidad Z:
					<input type="number" value={z} onChange={e => setZ(validateInput(e.target.value))} min="1" />
				</label>
			</div>

			<button onClick={handleSolve}>Resolve</button>

			{error && <div className="error">{error}</div>}

			{solution.length > 0 && (
				<table>
					<thead>
						<tr>
							<th>Jug X</th>
							<th>Jug Y</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{solution.map((step, index) => (
							<tr key={index}>
								<td>{step.x}</td>
								<td>{step.y}</td>
								<td>{step.action}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default WaterJugSolver;

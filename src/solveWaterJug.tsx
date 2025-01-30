interface Step {
  x: number;
  y: number;
  action: string;
}

type State = [number, number, Step[]];


const solveWaterJug = (x: number, y: number, z: number): Step[] | null => {
  const visited = new Set<string>();
  const queue: State[] = [[0, 0, []]];

  while (queue.length > 0) {
    const [currentX, currentY, steps] = queue.shift()!;

    // Generate new states
    const newStates = new Set<string>();
    
    // 1. Fill X
    newStates.add(JSON.stringify([x, currentY, [...steps, {x, y: currentY, action: "Fill Jug X"}]]));
    
    // 2. Fill Y
    newStates.add(JSON.stringify([currentX, y, [...steps, {x: currentX, y, action: "Fill Jug Y"}]]));
    
    // 3. Empty X
    newStates.add(JSON.stringify([0, currentY, [...steps, {x: 0, y: currentY, action: "Empty Jug X"}]]));
    
    // 4. Empty Y
    newStates.add(JSON.stringify([currentX, 0, [...steps, {x: currentX, y: 0, action: "Empty Jug Y"}]]));
    
    // 5. Transfer X -> Y
    const transferToY = Math.min(currentX, y - currentY);
    newStates.add(JSON.stringify([
      currentX - transferToY,
      currentY + transferToY,
      [...steps, {x: currentX - transferToY, y: currentY + transferToY, action: `Transfer ${transferToY} gallons from X to Y`}]
    ]));
    
    // 6. Transfer Y -> X
    const transferToX = Math.min(currentY, x - currentX);
    newStates.add(JSON.stringify([
      currentX + transferToX,
      currentY - transferToX,
      [...steps, {x: currentX + transferToX, y: currentY - transferToX, action: `Transfer ${transferToX} gallons from Y to X`}]
    ]));

    // Solution conditions
    if (currentX === z || currentY === z) return steps;
    if (currentX + currentY === z) {
      return [...steps, { x: currentX - transferToY, y: currentY + transferToY, action: `Transfer from bucket X to Y to get ${z} gallons.` }];
    }

    // Process new states
    for (const state of newStates) {
      const [newX, newY, newSteps]: State = JSON.parse(state);
      const stateKey = `${newX},${newY}`;
      
      if (!visited.has(stateKey)) {
        visited.add(stateKey);
        queue.push([newX, newY, newSteps]);
      }
    }
  }

  return null;
};

export default solveWaterJug;
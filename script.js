function mincost(arr) {
  const MinHeap = require('collections/heap'); // Using collections library for a MinHeap

  // Initialize a min-heap with the rope lengths
  const heap = new MinHeap(arr, null, (a, b) => b - a); // MinHeap (smallest first)

  let totalCost = 0;

  // Keep combining ropes until only one rope remains
  while (heap.length > 1) {
    const rope1 = heap.pop(); // Smallest rope
    const rope2 = heap.pop(); // Second smallest rope

    const cost = rope1 + rope2;
    totalCost += cost;

    // Add the combined rope back into the heap
    heap.push(cost);
  }

  return totalCost;
}


module.exports = mincost;

function mincost(arr) {
    if (arr.length < 2) {
        return 0; // If there's only one or no rope, no cost is needed
    }

    // Create a min-heap from the array (using the priority queue approach)
    const heap = [...arr];
    heap.sort((a, b) => a - b); // Sort to simulate a min-heap

    let totalCost = 0;

    // While more than one rope remains, keep connecting the two smallest
    while (heap.length > 1) {
        // Extract the two smallest ropes
        const first = heap.shift(); // O(N) operation, simulating heappop
        const second = heap.shift(); // O(N) operation, simulating heappop

        // The cost of connecting these two ropes
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the heap (in sorted order)
        heap.push(cost); // Add the new rope
        heap.sort((a, b) => a - b); // Sort the heap again to simulate rebalancing
    }

    return totalCost;
}
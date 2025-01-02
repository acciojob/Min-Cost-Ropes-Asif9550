function mincost(arr) {
    // If there's only one or no rope, no cost is needed
    if (arr.length <= 1) return 0;

    // First, sort the array to simulate a min-heap
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Continue until only one rope remains
    while (arr.length > 1) {
        // Take the two smallest ropes
        const first = arr.shift(); // Smallest
        const second = arr.shift(); // Second smallest

        // Calculate the cost to connect these two ropes
        const cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the array (sorted order)
        arr.push(cost);
        arr.sort((a, b) => a - b); // Re-sort the array
    }

    return totalCost;
}

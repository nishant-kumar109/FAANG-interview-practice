var longestZigZag = function(root) {
    let maxLength = 0;

    // Helper function for DFS traversal
    const dfs = (node, direction, length) => {
        if (!node) return;

        // Update the maximum ZigZag length
        maxLength = Math.max(maxLength, length);

        // Continue the ZigZag path
        if (direction === 'left') {
            // Move right
            dfs(node.right, 'right', length + 1);
            // Start a new path to the left
            dfs(node.left, 'left', 1);
        } else {
            // Move left
            dfs(node.left, 'left', length + 1);
            // Start a new path to the right
            dfs(node.right, 'right', 1);
        }
    };

    // Start DFS from root in both directions
    dfs(root.left, 'left', 1);
    dfs(root.right, 'right', 1);

    return maxLength;
};

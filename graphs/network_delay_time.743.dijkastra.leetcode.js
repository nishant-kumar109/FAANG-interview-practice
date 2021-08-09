// You are given a network of n nodes, labeled from 1 to n. 
// You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), 
// where ui is the source node, vi is the target node, 
// and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. 
// Return the time it takes for all the n nodes to receive the signal. 
// If it is impossible for all the n nodes to receive the signal, return -1.


//Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
//Output: 2


// Priority Queue implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

 const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]

const networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;
  
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  
  for(let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]);
  }
  
  while(!heap.isEmpty()) {
    const currentVertex = heap.pop();

    const adjacent = adjList[currentVertex];
    for(let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if(distances[currentVertex] + weight < distances[neighboringVertex]) {
          distances[neighboringVertex] = distances[currentVertex] + weight;
          heap.push(neighboringVertex);
      }
    }
  }
  
  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1))

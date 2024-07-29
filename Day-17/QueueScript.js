const queue = new Queue();
queue.enqueue("Job 1");
queue.enqueue("Job 2");
queue.enqueue("Job 3");

while (queue.front() !== null) {
  console.log(`Printing: ${queue.dequeue()}`);
}

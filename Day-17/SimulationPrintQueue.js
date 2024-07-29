//Task 6: Simulate a printer queue

const printerQueue = new Queue();
printerQueue.enqueue("Print job 1");
printerQueue.enqueue("Print job 2");
printerQueue.enqueue("Print job 3");

while (printerQueue.front() !== null) {
  console.log(`Processing: ${printerQueue.dequeue()}`);
}

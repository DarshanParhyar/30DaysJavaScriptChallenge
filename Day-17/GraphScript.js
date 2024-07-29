const graphNetwork = new Graph();
graphNetwork.addVertex('X');
graphNetwork.addVertex('Y');
graphNetwork.addVertex('Z');
graphNetwork.addEdge('X', 'Y');
graphNetwork.addEdge('Y', 'Z');
graphNetwork.bfs('X'); 

function augmentingPath(graph, begin, end, path = [], visited = []) {
    path.push(begin); // adds current node to path

    if (begin === end) { // base case, if start is also our end then the path is found 
        return path; 
    }

    visited.push(begin);  // adds current node to visited 

    if (graph[begin]) {
        for (var key in graph[begin]) { // iterates through each neighbor of current  node
            if (!visited.includes(key)) {  // checks if neighbor has already been visited 
                var newPath = augmentingPath(graph, key, end, path, visited);

                if (newPath.length > 0) { // checks if path is valid, makes sure array isn't empty
                    return newPath; // path found, returns it
                }
            }
        }
    }

    path.pop();
    visited.pop();

    return [];  
}

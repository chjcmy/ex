
let A = [[],[],[],[],[]]

for(i = 0; i < 5; i++){
    for (j = i; i < 5; i ++ ) {
        if(i == 0){
            A[i] = 1 * j
        }
        A[i][j] = i * j
    }
}
console.log(A[1][4])

function getVisited(row, col) {
    const visited = []
    for(let i=0; i<row; i++) {
        const temp = [];
        for(let j=0; j<col; j++) {
            temp.push(false);
        }
        visited.push(temp);
    };
    return visited;
}
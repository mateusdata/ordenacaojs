
let odc = [10,20,1,5,200];
function insertionSort(arr){
    
    for(let i = 1; i < arr.length;i++){
        let valorInicial = arr[i]
        let j = i - 1;
        while( j >= 0 && arr[j] > valorInicial){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = valorInicial;
    }
    return arr;
}
console.log(insertionSort(odc));

// com imput

/*import read from "readline-sync"

let vetor = read.question("Informe seu nome\n");
let arr = JSON.parse("[" + vetor + "]");

function insertionSort(arr){
    
    for(let i = 1; i < arr.length;i++){
        let valorInicial = arr[i]
        let j = i - 1;
        while( j >= 0 && arr[j] > valorInicial){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = valorInicial;
    }
    return arr;
}
console.log(insertionSort(arr));*/
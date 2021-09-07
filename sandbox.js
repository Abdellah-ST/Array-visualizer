//This file mainly modify the DOM.

//Get the size of the array randomly.
let size = Math.floor(Math.random() * 100) + 10; 
let arr = new Array(size).fill(1);

//Fill the array with random numbers.
arr.forEach( (item, index) =>
 {arr[index] =  Math.floor(Math.random() * 500);});

//Buttons.
const algoBtn = document.querySelector('.btn-sort');
const generator = document.querySelector('.generator');

//Choose the sorting algorithm and then apply it to the DOM.
let algo;
algoBtn.addEventListener('click', e =>{
    if(e.target.textContent === 'Insertion sort'){
        algo = insertionSort;
    }
    else if(e.target.textContent === 'Selection sort'){
        algo = dumbSort;
    }
    else if(e.target.textContent === 'Quick sort'){
        algo = quickSort;
    }
    sortArray(arr, algo);

});

//Generate random array and display it.
generator.addEventListener('click', ()=>{
    size = Math.floor(Math.random() * 100) + 10; 
    arr = new Array(size).fill(1);

    //Fill the array with random numbers.
    arr.forEach( (item, index) =>
    {arr[index] =  Math.floor(Math.random() * 500);});
    fillMain(arr);
})

//  Main section.
const main = document.querySelector('#Main');
fillMain(arr);
// let algo = insertionSort;
sortArray(arr, algo);

//Fill the main section with the array elements.
function fillMain(array){
    array = array.filter(item => item != undefined);
    main.innerHTML = '';
    main.style.gridTemplateColumns = `repeat(${array.length}, auto)`;
    for(let i = 0; i < array.length; i++){
        let div = document.createElement('div');
        div.classList.add('item');
        if(array.length < 50)
           div.textContent = `${array[i]}`;
        div.style.height = `${array[i]}px`;
        main.appendChild(div);
    }
    
}

// Sort the array using the sorting Function.
async function sortArray(array, sortingFunction){
    sortingFunction(array);
    let dummy = await(delay(2000));
    fillMain(array);
}

// Add effect on specific item on the array.
//Basically changing the background-color.
function wink(index, color = 'yellow'){
    main.children[index].style.backgroundColor = `${color}`;
}
function unwink(index){
    main.children[index].style.backgroundColor = '#FCB0B3';
}

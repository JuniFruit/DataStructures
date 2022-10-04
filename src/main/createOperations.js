import { 
    hashMapOperations, 
    linkedListOperations, 
    queueOperations,
    stackOperations,
    heapOperations

 } from "./main.js";

import { removeAllChildNodes } from "./utility.js";


const opeartionsDiv = document.getElementById('operations');

// Create UI for functions and inputs 
const createFunctionsField = () => {
    const select = document.createElement('select');
    select.className = 'functions'
    select.name = 'functions'
    select.id = 'functions'
    opeartionsDiv.append(select);

    const functionsInputsContainer = document.createElement('div')
    functionsInputsContainer.className = 'function-inputs';
    functionsInputsContainer.id = 'function-inputs';
    opeartionsDiv.append(functionsInputsContainer);

    const performBtn = document.createElement('button');
    performBtn.className = 'operation-button';
    performBtn.id = 'operation-button';
    performBtn.innerText = 'Perform';
    performBtn.onclick = handleOperation;
    opeartionsDiv.append(performBtn);
}

// Create functions for particular data structure
export const createOperations = (dataStructure) => {

    if (opeartionsDiv.children.length > 0) {
        removeAllChildNodes(opeartionsDiv);
    }

    createFunctionsField();

    switch (dataStructure) {
        case 'Linked List':
            createLLfunctions();
            break;
        case 'Queue':
            createQueueFunctions();
            break;
        case 'Stack':
            createStackFunctions();
            break;
        case 'HashMap':
            createHashMapFunctions();
            break;
        case 'Heap':
            createHeapFunctions();
            break;
    }
}

/* Create inputs for functions */

const createInputIndex = (placeholder = 'Type in index') => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    const inputInd = document.createElement('input');
    inputInd.id = 'input-index';
    inputInd.type = 'number';
    inputInd.placeholder = placeholder;
    functionsInputsContainer.append(inputInd);
}

const createInputData = (placeholder = 'Type in value') => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    const inputData = document.createElement('input');
    inputData.id = 'input-data';
    inputData.maxLength = 10;
    inputData.placeholder = placeholder;
    functionsInputsContainer.append(inputData);
}

const createInputData2 = (placeholder = 'Type in second value') => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    const inputData2 = document.createElement('input');
    inputData2.id = 'input-data2';
    inputData2.maxLength = 10;

    inputData2.placeholder = placeholder;
    functionsInputsContainer.append(inputData2);
}

const createInputIndex2 = (placeholder = 'Type in second index') => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    const inputInd2 = document.createElement('input');
    inputInd2.id = 'input-index2';
    inputInd2.type = 'number';
    inputInd2.placeholder = placeholder;
    functionsInputsContainer.append(inputInd2);
}

/* Description */

const createOperationDescription = (description) => {
    const prevDescription = document.getElementById('function-description');
    prevDescription ? prevDescription.remove() : null;

    const functionsInputsContainer = document.getElementById('function-inputs');
    const descriptionP = document.createElement('p');
    descriptionP.id = 'function-description'
    descriptionP.append(description.toString());
    functionsInputsContainer.prepend(descriptionP);
}


/* Linked List opeartions */

const LLOpeartionsInputs = (e) => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    removeAllChildNodes(functionsInputsContainer);
    if (!e.target.value) return;


    switch (e.target.value) {
        case 'LL_getMiddle':
            createOperationDescription('Returns middle node from the given list')
            break;
        case 'LL_reverseBetween':
            createOperationDescription('Reverses nodes between given indexes. Second index cannot be less than the first one')
            createInputIndex();
            createInputIndex2();
            break;
        case 'LL_swapNodes':
            createOperationDescription('Swaps given nodes')
            createInputData();
            createInputData2();
            break;
        case 'LL_insertAtIndex':
            createOperationDescription('Inserts given value at the given index');

            createInputData();
            createInputIndex();
            break;
        case 'LL_search':
            createOperationDescription('Returns a node with the given value. (First to find)');

            createInputData();
            break;
        case 'LL_searchByIndex':
            createOperationDescription('Returns a node with the given index.');

            createInputIndex();
            break;
        case 'LL_removeByData':
            createOperationDescription('Removes a node with the given index');

            createInputData();
            break;
        case 'LL_addToHead':
            createOperationDescription('Adds a node to the head of the list');

            createInputData();
            break;
        case 'LL_addToTail':
            createOperationDescription('Adds a node to the tail of the list');

            createInputData();
            break;
        case 'LL_removeHead':
            createOperationDescription('Removes a node at the head of the list');

            break;
        case 'LL_removeTail':
            createOperationDescription('Removes a node at the tail of the list');

            break;
        default:
            return;
    }
}

const createLLfunctions = () => {
    const functionsArr = ['getMiddle', 'reverseBetween', 'swapNodes', 'insertAtIndex', 'removeHead', 'search', 'searchByIndex', 'removeByData', 'addToHead', 'addToTail', 'removeTail'];
    const functionsSelect = document.getElementById('functions');

    functionsArr.forEach(func => {
        const option = document.createElement('option');
        option.value = `LL_${func}`;
        option.append(func);
        functionsSelect.append(option);
    })

    createOperationDescription('Returns middle node from the given list')

    functionsSelect.onchange = LLOpeartionsInputs;
}


/* Queue opeartions */

const queueOperationsInputs = (e) => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    removeAllChildNodes(functionsInputsContainer);
    if (!e.target.value) return;


    switch (e.target.value) {
        case 'Q_enqueue':
            createOperationDescription('Adds a node to the tail of the list');

            createInputData();
            break;
        case 'Q_dequeue':
            createOperationDescription('Removes a node at the head of the list');

            break;
        case 'Q_peek':           
            createOperationDescription('Returns a node at the head of the list');
            break;
          
        default:
            return;
    }
}



const createQueueFunctions = () => {
    const functionsArr = ['dequeue', 'enqueue', 'peek'];
    const functionsSelect = document.getElementById('functions');

    functionsArr.forEach(func => {
        const option = document.createElement('option');
        option.value = `Q_${func}`;
        option.append(func);
        functionsSelect.append(option);
    })
    createOperationDescription('Removes a node at the head of the list');

    functionsSelect.onchange = queueOperationsInputs;
}

/* Stack opeartions */

const stackOperationsInputs = (e) => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    removeAllChildNodes(functionsInputsContainer);
    if (!e.target.value) return;


    switch (e.target.value) {
        case 'S_pop':
            createOperationDescription('Removes a node at the head of the list');
            break;
        case 'S_push':
            createOperationDescription('Adds a node at the head of the list');
            createInputData();
            break;
        case 'S_peek':
            createOperationDescription('Returns a node at the head of the list');
            break;
        default:
            return;
    }
}

const createStackFunctions = () => {
    const functionsArr = ['pop', 'push', 'peek'];
    const functionsSelect = document.getElementById('functions');

    functionsArr.forEach(func => {
        const option = document.createElement('option');
        option.value = `S_${func}`;
        option.append(func);
        functionsSelect.append(option);
    })

    createOperationDescription('Removes a node at the head of the list');

    functionsSelect.onchange = stackOperationsInputs;
}


/* HashMap operations */

const hashMapOperationInputs = (e) => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    removeAllChildNodes(functionsInputsContainer);
    
    const prevOperationResult = document.querySelector('.operation-result');
    prevOperationResult ? prevOperationResult.remove() : null;

    if (!e.target.value) return;


    switch (e.target.value) {
        case 'HM_assign':
            createOperationDescription('Adds key-value pair to the Hash Map');
            createInputData('Type in key');
            createInputData2('Type in value');
            break;
        case 'HM_retrieve':
            createOperationDescription('Returns the value of the passed key');
            createInputData('Type in key');
            break;
        
        default:
            return;
    }
}

const createHashMapFunctions = () => {
    const functionsSelect = document.getElementById('functions');
    const functionsArr = ['assign', 'retrieve']

    functionsArr.forEach(func => {
        const option = document.createElement('option');
        option.value = `HM_${func}`;
        option.append(func);
        functionsSelect.append(option);
    })


    functionsSelect.onchange = hashMapOperationInputs;
    hashMapOperationInputs({target: { value:'HM_assign' }})
}

/* Heap operations */

const heapOperationsInputs = (e) => {
    const functionsInputsContainer = document.getElementById('function-inputs');
    removeAllChildNodes(functionsInputsContainer);
    
    const prevOperationResult = document.querySelector('.operation-result');
    prevOperationResult ? prevOperationResult.remove() : null;

    if (!e.target.value) return;


    switch (e.target.value) {
        case 'MH_popMin':
            createOperationDescription('Returns the minimum value from the heap');
            
            break;
        case 'MH_addValue':
            createOperationDescription('Adds the passed value to the heap');
            createInputIndex('Type in value');
            break;
        
        default:
            return;
    }
}

const createHeapFunctions = () => {
    const functionsSelect = document.getElementById('functions');
    const functionsArr = ['popMin', 'addValue']

    functionsArr.forEach(func => {
        const option = document.createElement('option');
        option.value = `MH_${func}`;
        option.append(func);
        functionsSelect.append(option);
    })


    functionsSelect.onchange = heapOperationsInputs;
    createOperationDescription('Returns the minimum value from the heap');
}


const handleOperation = () => {
    const dataType = document.getElementById('structures').value;
    
    const prevOperationResult = document.querySelector('.operation-result');
    prevOperationResult ? prevOperationResult.remove() : null;

    switch (dataType) {
        case 'Linked List':
            linkedListOperations();
            break;
        case 'Queue':
            queueOperations();
            break;
        case 'Stack':
            stackOperations();
            break;
        case 'HashMap':
            hashMapOperations();
            break;
        case 'Heap': 
            heapOperations();
            break;
    }

}


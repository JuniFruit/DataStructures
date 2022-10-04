const canvas = document.getElementById('canvas')

export const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export const handleError = (msg) => {
    if (!msg) return;
    removeAllChildNodes(canvas);

    const errMsg = document.createElement('h3');
    errMsg.append(msg);
    canvas.append(errMsg);
}


export const setPointers = (dataType) => {

    const pointers = document.querySelectorAll('.pointer');
  
    const rotatePointers = (deg) => {

        pointers.forEach(pointer => pointer.style.transform = `rotate(${deg}deg)`);

    }

    switch(dataType) {
        case 'Linked List': 
            rotatePointers(0);
            break;
        case 'Queue':
            rotatePointers(0);
            break;
        case 'Stack':
            rotatePointers(90);    
    }
}

export const highlightNode = (target) => {
    canvas.childNodes.forEach(node => {
     
        if (node.firstChild?.innerText === target.value.toString()) {
            node.style.backgroundColor = 'var(--secondary)';
            return;
        }
    })
}
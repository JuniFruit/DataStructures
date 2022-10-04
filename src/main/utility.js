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


export const highlightNode = (target) => {
   
    const children = canvas.childNodes;

    for (let i=0;i<children.length;i++) {
        if (children[i].firstChild?.innerText === target.value.toString()) {
            children[i].style.backgroundColor = 'var(--secondary)';
            break
        }
    }
    return;
}
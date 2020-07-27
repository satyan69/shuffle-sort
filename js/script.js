window.onload = () => {

    var list = document.getElementById("shuffleAndSort");
    /*==========  Method to Shuffle the Data  ==========*/
    const shuffleData = (items) => {
        let shallowCopy = items.slice(0), i = shallowCopy.length;
        while (--i) {
            const rand = Math.floor(Math.random() * i);
            [shallowCopy[rand], shallowCopy[i]] = [shallowCopy[i], shallowCopy[rand]];
        }
        return shallowCopy;
    }
    /*==========  Method to Shuffle the Node  ==========*/
    const shuffleNodes = () => {
        let i = 0;
        let nodes = shuffleData([...list.children]);
        let nodeLength = nodes.length;
        while (i < nodeLength) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    /*==========  End  ==========*/
    /*==========  Method to Sort the Node  ==========*/
    const sortNode = () => {
        [...list.children]
            .sort((i, j) => i.innerText > j.innerText ? 1 : -1)
            .forEach(node => list.appendChild(node))
    }
    /*==========  End  ==========*/
    /*==========  shuffle button onclck  ==========*/
    document.getElementById("shuffleNode").onclick = shuffleNodes;
    /*==========  sort button onclck  ==========*/
    document.getElementById("sortNode").onclick = sortNode;
}

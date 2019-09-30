function calculateStorage(numItems, sizeOfEach) {
    return(numItems * sizeOfEach)
}

document.getElementById("calculateBtn").addEventListener('click', () => {
    const items = document.getElementById("items").value 
    const sizeEach = document.getElementById("sizeEach").value

    document.getElementById("result").innerHTML = `The esimated storage size is: ${calculateStorage(items, sizeEach)}`
})
function calculateStorage() {
    const items = document.getElementById("items").value 
    const sizeEach = document.getElementById("sizeEach").value
    const result = document.getElementById("result")

    const storage = items * sizeEach

    result.innerHTML = `The estimated storage size is: ${storage}`
}

document.getElementById("calculateBtn").addEventListener('click', calculateStorage)
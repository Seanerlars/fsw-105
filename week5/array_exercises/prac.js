const arr9 = ['dog', 'wolf','by', 'family','eaten']

function lengthSort(arr9){
    const result = arr9.sort(function(a, b){
        return a.length-b.length 
    })
return result
}
console.log(lengthSort(arr9));
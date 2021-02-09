function sort(arr){
    if(arr.length < 2) return arr
    let less = [], bigger = []
    for(let i = 1; i < arr.length; ++i)
        (arr[i] < arr[0] ? less : bigger).push(arr[i])
    return sort(less).concat([arr[0]]).concat(sort(bigger))
}

function bin_search(array, el){ // array should be sorted
    let arr = array.filter(e => typeof e == typeof el)
    for(let btm = 0, top = arr.length - 1, mid = Math.floor((btm + top)/2); true; mid = Math.floor((btm + top)/2)){
        if(btm >= top) return arr[btm] == el ? btm : -1
        if(arr[mid] == el) return mid
        if(arr[mid] < el) btm = mid + 1
        else top = mid - 1
    }
}

function binomial(n,k){
    if(k == 0 || k == n) return 1
    return binomial(n-1, k-1) + binomial(n-1, k)
}
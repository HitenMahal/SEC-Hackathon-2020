
function pointSystem (user1,user2) {
    findCommonElement(intrests1,intrests2)
}

function findCommonElement(array1, array2) { 
    var common = [] 
    for(let i = 0; i < array1.length; i++) { 
        for(let j = 0; j < array2.length; j++) { 
            if(array1[i] === array2[j]) { 
                common.push(array1[i]);
            } 
        } 
    }
    return common.length
} 
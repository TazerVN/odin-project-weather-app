

function saveObject(obj){
    const key = obj.name
    localStorage.setItem(key, JSON.stringify(obj));
    
}

function restoreObject(key){
    const getObj = JSON.parse(localStorage.getItem(key))
    return getObj
}

    
export {saveObject, restoreObject}
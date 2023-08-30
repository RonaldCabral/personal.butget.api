let envelopesIdCounter = 0;

const createEnvelope = (arr, body) => {
    if(body.hasOwnProperty('category') && 
       body.hasOwnProperty('budget')) {
     let currentId;
     envelopesIdCounter += 1;
     currentId = envelopesIdCounter;
    
     return {
        'id': currentId, 
        'category': body.category,
        'budget': body.budget,
     };
    } else {
        return false
    }
}

const getEnvelopeById = (arr, id) => {
    return arr.find((element) => {
        return element.id === Number(id);
    })
}

const getIndexById = (arr, id) => {
    return arr.findIndex((element) => {
        return element.id === Number(id);
    })
}

module.exports = {
    getEnvelopeById: getEnvelopeById,
    createEnvelope: createEnvelope,
    getIndexById: getIndexById,
}
const express = require('express')
const envelopesRouter = express.Router()
const { createEnvelope, getEnvelopeById, getIndexById } = require('./utils')

const envelopesArr = []

envelopesRouter.post('/', (req, res, next) => {
    const processedEnvelope = createEnvelope(envelopesArr, req.body)
    if(processedEnvelope) {
        envelopesArr.push(processedEnvelope);
        res.status(201).send(processedEnvelope);
    } else {
        res.status(400).send('Wrong body structure')
    }
});

envelopesRouter.get('/', (req, res, next) => {
    res.send(envelopesArr)
})

envelopesRouter.get('/:id', (req, res, next) => {
    const envelope = getEnvelopeById(envelopesArr, req.params.id);
    if (envelope) {
        res.send(envelope)
    } else {
        res.status(404).send();
    }
});

envelopesRouter.delete('/:id', (req, res, next) => {
    const envelopeIndex = getIndexById(envelopesArr, req.params.id);
    if(envelopeIndex !== -1) {
        envelopesArr.splice(envelopeIndex, 1);
        res.status(204).send();
    } else {
        res.status()
    }
})


module.exports = envelopesRouter
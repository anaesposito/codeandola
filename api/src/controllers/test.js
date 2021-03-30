const schemaTest = require('../models/test')

module.exports = {
    create: async string => {
        return newTest = new schemaTest(string)
        .then(newSchema => {
            newSchema.save()
            return newSchema
        })
    }
}
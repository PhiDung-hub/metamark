const mongoose = require('mongoose')

const EarnTokensSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    metamaskAddress: { type: String , required: true, unique: true},
    tokensToBeEarned: {type: Number, required:true }
}, {collection: 'earnTokens'})

const model = mongoose.model('EarnTokensSchema', EarnTokensSchema)

module.exports = model
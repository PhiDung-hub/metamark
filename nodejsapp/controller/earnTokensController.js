const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../auth.config')
const  Token  = require('../model/earnTokens');

router.post('/api/earnTokens', async(req, res) => {
    const {token, username, metamaskAddress, tokensToBeEarned } = req.body
    console.log(req.body)
    try{
      
        //check if user is verified/logged in
       jwt.verify(token, config.secret)

       //check if user document already exists, if yes update tokens to be earned else create new document
       const user = await Token.findOne({ username }).lean()
       
       if(user){
        const _id = user._id;
        const newtokens = user.tokensToBeEarned + tokensToBeEarned
        await Token.updateOne({_id},
            { $set: { tokensToBeEarned:  newtokens}})
            return res.json({status:'ok'})
        }
        else{

            if(!username || typeof username !== 'string'){
                return res.json({status:'error', error:'Invalid username'})
            }
        
            if(!metamaskAddress || typeof metamaskAddress !== 'string'){
                return res.json({status:'error', error:'Invalid Metamask Address'})
            }
    
            const response = await Token.create({
                username, metamaskAddress, tokensToBeEarned
            })
            console.log(response);
            return res.json({ status: 'ok' })
        }
    
    } catch(error){
        console.log(error)
            res.json({status:'error', error:'User token not verified'})
        } 
})

// router.get('/:username', (req, res)=>{
//     const username = req.params.username
    
//     Token.findOne(, (err, doc) => {
//         if(!err){ res.send(doc); }
//         else{ console.log('Error in Retreiving student :' + JSON.stringify(err, undefined, 2)); }
//     });
// });


module.exports = router;
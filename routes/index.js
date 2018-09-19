const express = require('express');
const router  = express.Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get('http://api.walmartlabs.com/v1/items/12417832?apiKey=' + process.env.WALMART_KEY + '&lsPublisherId=""&format=json')
    .then(response=>{
      let info = response.data;
      res.render('index',{info});
      console.log('succesfull');
    })
    .catch(err => {
      console.log("Axios err: ", err);
      res.render('index',{err});
      console.log('fail');
    });
});

module.exports = router;

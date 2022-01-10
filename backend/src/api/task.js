const express = require('express');

const router = express.Router();

router.get('/random', (req, res) => {
  
    // Program to generate some fake
  // names with their job titles
    
  // Requiring faker module
  const faker = require('faker')
  
    var data = faker.fake("{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}")
    //data = data + ', ' + faker.fake("{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}")
    //data = data + ', ' + faker.fake("{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}")

  

  res.json({
    random_task: data

  });

});


module.exports = router;

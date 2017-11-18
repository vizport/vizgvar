const express = require('express');
const axios = require('axios');

const router = express.Router();

const eEnsemblPath = id => `http://rest.ensembl.org/overlap/translation/${id}?feature=translation_exon;content-type=application/json`;

router.get('/:id', (req, res) => {
  const id = req.params.id;
  axios.get(eEnsemblPath(id))
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(response.status).send('Error');
    });
});

module.exports = router;

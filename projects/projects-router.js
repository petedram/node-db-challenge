const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// '/api/projects'

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  module.exports = router;


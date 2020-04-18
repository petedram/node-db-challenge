const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// '/api/projects'

router.get('/', (req, res) => {
    Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

router.post('/', (req, res) => {
const projectData = req.body;

Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new resource' });
     });
});


router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new task' });
     });
});

router.get('/tasks', (req, res) => {
    Projects.findTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
    });
});


module.exports = router;


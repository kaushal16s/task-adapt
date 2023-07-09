const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const data = [
    { id: 1, name: 'John Doe', profession: 'Software Engineer', location: 'New York' },
    { id: 2, name: 'Jane Smith', profession: 'UX Designer', location: 'San Francisco' },
    { id: 3, name: 'David Johnson', profession: 'Data Analyst', location: 'London' },
    { id: 4, name: 'Sarah Anderson', profession: 'Graphic Designer', location: 'Los Angeles' },
    { id: 5, name: 'Michael Brown', profession: 'Project Manager', location: 'Chicago' },
    { id: 6, name: 'Emily Davis', profession: 'Marketing Specialist', location: 'Boston' },
    { id: 7, name: 'Daniel Clark', profession: 'Accountant', location: 'Sydney' },
    { id: 8, name: 'Olivia Garcia', profession: 'Product Manager', location: 'Berlin' },
    { id: 9, name: 'William Hall', profession: 'Sales Representative', location: 'Toronto' },
    { id: 10, name: 'Sophia Lee', profession: 'HR Manager', location: 'Seoul' },
    { id: 11, name: 'Matthew Martinez', profession: 'Web Developer', location: 'Mexico City' },
    { id: 12, name: 'Ava Nelson', profession: 'UX Researcher', location: 'Stockholm' },
    { id: 13, name: 'James Robinson', profession: 'Data Scientist', location: 'Tokyo' },
    { id: 14, name: 'Lily Taylor', profession: 'Content Writer', location: 'Paris' },
    { id: 15, name: 'Benjamin Turner', profession: 'Software Engineer', location: 'Seattle' },
    { id: 16, name: 'Chloe Walker', profession: 'UX Designer', location: 'Melbourne' },
    { id: 17, name: 'Samuel Wright', profession: 'Data Analyst', location: 'Madrid' },
    { id: 18, name: 'Ella Young', profession: 'Graphic Designer', location: 'Vancouver' },
    { id: 19, name: 'Joseph Hill', profession: 'Project Manager', location: 'Dubai' },
    { id: 20, name: 'Grace Lewis', profession: 'Marketing Specialist', location: 'Mumbai' },
  ];
  

app.get('/api/contacts', (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

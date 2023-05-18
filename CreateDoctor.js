const express = require('express');
const router = express.Router();

router.post('/CreateDoctor', (req, res) => {
    try {
        const { name, email, phone, age, sal, spec } = req.body;
        const joindate = new Date().toISOString().slice(0, 10);
        const patients = "-1";

        // Perform any necessary operations with the form data
        // For example, you can store it in a file or perform other business logic

        // Simulate a successful response
        res.status(200).send("<br><br><br><h1 align=center><font color=\"green\">SUCCESSFUL<br></font></h1><script type=\"text/javascript\"></script>");
    } catch (error) {
        console.log(error);
        res.status(500).send("<br><br><br><h1 align=center><font color=\"red\">THERE IS SOME PROBLEM<br></font></h1><script type=\"text/javascript\"></script>");
    }
});

module.exports = router;

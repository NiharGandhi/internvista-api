const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://nihargandhi0000:6DlFU6UIwGLdibj5@cluster0.j2sk5gy.mongodb.net/intern?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log("Error connecting: ", err)
});

app.listen(port, () => {
    console.log('Server is running on port 3000')
});

const Internships = require("./models/internship");
const Applications = require("./models/application");

app.get("/", (req, res) => {
    res.status(200).send({
        "success": true,
        "message": "Connected to MongoDB"
    });
})

// Endpoints
app.get('/getInternships', async (req, res) => {
    console.log('Get internships');
    try {
        console.log("Hello world")
        const internships = await Internships.find();
        res.status(200).json(internships);
    } catch (error) {
        console.log("Error getting internships: ", error)
        res.status(500).json({ message: 'Error getting internships' })
    }
});

app.get('/getInternship/:_id', (req, res) => {
    try {

        const internshipId = req.params.internshipId
        
        Internships.findOne({ _id: {$ne:internshipId}}).then((internship) => {
            res.status(200).json(internship);
        }).catch((error) => {
            console.log("Error getting internships: ", error);
            res.status(500).json({ message : 'Error getting internships' })
        }) 
    } catch (error) {
        console.log("Error getting internship: ", error);
        res.status(500).json({ message: 'Error getting internship details' })
    }
});

app.get('/apply/:userId/:_id', async (req, res) => {
    try {
        const userId = req.params.userId;
        const internshipId = req.params._id;

        Applications.find({ userId: userId, internshipId: internshipId }).then((application) => {
            res.status(200).json(application)
        }).catch((err) => {
            console.log("Error: ", err)
            res.status(500).json({ message: 'Error applying for internship' });
        })

    } catch (error) {
        console.log("Error Applying: ", error);
        res.status(500).json({ message: 'Error applying for internship' });
    }
})

app.post('/apply/:userId/:_id', async (req, res) => {
    try {
        const userId = req.params.userId;
        const internshipId = req.params._id;
        const { status } = req.body;

        const application = new Applications({
            userId,
            internshipId,
            status
        });

        await application.save();
        res.status(201).json({ message: 'Application created successfully' });
    } catch (error) {
        console.log("Error Applying: ", error);
        res.status(500).json({ message: 'Error applying for internship' });
    }
});
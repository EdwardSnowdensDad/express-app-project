const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Climate Crisis</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 15px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                }
                a:hover {
                    background-color: #45a049;
                }
                .back-link {
                    margin-top: 20px;
                    display: block;
                }
            </style>
        </head>
        <body>
            <h1>Climate Crisis Assignment</h1>
            <p>This page links to my Climate Crisis assignment.</p>
            <a href="https://csc317test.netlify.app" target="_blank">View Climate Crisis Project</a>
            <a href="/" class="back-link">Back to Home</a>
        </body>
        </html>
    `);
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Typesetting</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 15px;
                    background-color: #2196F3;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                }
                a:hover {
                    background-color: #0b7dda;
                }
                .back-link {
                    margin-top: 20px;
                    display: block;
                }
            </style>
        </head>
        <body>
            <h1>Typesetting Assignment</h1>
            <p>This page links to my Typesetting assignment.</p>
            <a href="https://clever-sorbet-8e89d3.netlify.app" target="_blank">View Typesetting Project</a>
            <a href="/" class="back-link">Back to Home</a>
        </body>
        </html>
    `);
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Four Algorithms</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 15px;
                    background-color: #ff9800;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                }
                a:hover {
                    background-color: #e68a00;
                }
                .back-link {
                    margin-top: 20px;
                    display: block;
                }
            </style>
        </head>
        <body>
            <h1>Four Algorithms Assignment</h1>
            <p>This page links to my Four Algorithms assignment.</p>
            <a href="https://clever-sorbet-8e89d3.netlify.app" target="_blank">View Four Algorithms Project</a>
            <a href="/" class="back-link">Back to Home</a>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
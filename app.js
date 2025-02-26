const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const process = require('process');
// const disableEtag = process.env.DISABLE_ETAG === 'true';

const json64KB = './json/64KB.json';
const json128KB = './json/128KB.json';
const json256KB = './json/256KB.json';
const json512KB = './json/512KB.json';
const json1MB = './json/1MB.json';
const json5MB = './json/5MB.json';
const json10MB = './json/10MB.json';
const json15MB = './json/15MB.json';
const json25MB = './json/25MB.json';
const json40MB = './json/40MB.json';
const json100MB = './json/100MB.json';

const startTime = process.hrtime();

// Function to read the JSON file
function readJsonFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading or parsing JSON file:", error);
        return null;
    }
}

// if (disableEtag) {
//     console.log('DISABLE_ETAG envrionment variable is set to true');
//     app.disable('etag');
// } else {
//     console.log('DISABLE_ETAG envrionment variable is set to false');
// }


// Default endpoint
app.get('/', (req, res) => {
    const diffTime = process.hrtime(startTime);
    const uptime = diffTime[0] + diffTime[1] / 1e9;
    res.send('Uptime: ' + uptime);
});

app.get('/64kb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }
    var data = readJsonFile(json64KB)
    res.json(data);
});

app.get('/128kb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }
    var data = readJsonFile(json128KB)
    res.json(data);
});

app.get('/256kb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json256KB)
    res.json(data);
});

app.get('/512kb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json512KB)
    res.json(data);
});

app.get('/1mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json1MB)
    res.json(data);
});

app.get('/5mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json5MB)
    res.json(data);
});

app.get('/10mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json10MB)
    res.json(data);
});

app.get('/15mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json15MB)
    res.json(data);
});

app.get('/25mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json25MB)
    res.json(data);
});

app.get('/40mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json40MB)
    res.json(data);
});

app.get('/100mb', (req, res) => {
    var etagDisableHeader = req.headers["etag-disable"];
    console.log("path: " + req.path + " etagDisableHeader: " + etagDisableHeader)
    if (etagDisableHeader == "true") {
        console.log("Disabling etag");
        app.disable('etag')
    } else{
        app.enable('etag');
    }    
    var data = readJsonFile(json100MB)
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
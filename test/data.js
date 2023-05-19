///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Part 1 (00:00:00 - 01:01:49) /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Import & Export
const {saludar, saludarJosue} = require('./saludos.js')
console.log(saludos.saludar('Josue'));
console.log(saludar("Josue"));
console.log(saludarJosue());

// Console module
console.log("Hola mundo");
console.warn("Hola mundo");
console.error(new Error("Ups!"));

// Process module
console.log(process);
console.log(process.env);
console.log(process.argv);
console.log(process.memoryUsage());

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Part 2 (01:01:49 - 02:10:38) /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// OS module
const os = require('os');
console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());

// Timers module
function showTopic(topic){
    console.log(`Your topic is: ${topic}`)
}
setTimeout(showTopic, 1000, "Node.js");

function showTopicSecondary(topic){
    console.log(`Your topic is: ${topic}`)
}
console.log('Antes de setImmediate()');
setImmediate(showTopicSecondary, "Express.js");
console.log('Después de setImmediate()');

function showTopicThird(topic){
    console.log(`Your topic is: ${topic}`);
}
setInterval(showTopicThird, 1500, "MongoDB");

// Fs module

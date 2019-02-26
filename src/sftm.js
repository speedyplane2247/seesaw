// SFTM.js
// Forces teacher mode in Seesaw on non-teacher accounts.
alert("Welcome to SFTM! Please use sftm.help(), sftm.hook(), or sftm.switch(). If you don't know what to do, use sftm.help().")
var sftm = new Object();
sftm.help = function() {
console.log("Welcome to SFTM! This programs lets you forcibly create a SeeSaw");
console.log("teacher account forcibily. This program requires you to do a few");
console.log("things that the script can't do. Thanks!");
console.log("----");
console.log("sftm.guide() - Launches the script in guide mode.");
console.log("sftm.hook() - Creates a teacher account.");
console.log("sftm.switch() - Switches to a teacher account.");
console.log("sftm.why() - Benefits of a teacher account.");
}
sftm.guide = function(thing) {
if (thing === undefined) {
console.log("Welcome to SFTM Guide!");
console.log("Please change to part1.");
console.log("sftm.guide('part1')");
console.log("Thank you!")
} 
if (thing == "part1") {
console.log("Part 1: Setting up your account.");
console.log("You will have to constantly re-inject the JS file per time you switch pages, unless you are using a script manager in Chrome.");
console.log("Log out of SeeSaw.");
console.log("Click teacher, or type sftm.hook('guide').");
//
}
}
sftm.hook = function(thingX) {
if (thingX === undefined) {
alert("About to inject and force teacher mode. You might need to re-run the process to continue.")
}

}
sftm.switch = function() {
alert("err: not implemented.")
}
sftm.why = function() {
alert("err: not implemented.")
}

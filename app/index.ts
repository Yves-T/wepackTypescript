import greeter = require('./greeter');
import $ = require('jquery');
var css = require("./styles.css");
console.log(css);
$(() => {

    $(document.body).html(greeter("World"));

    var img1 = document.createElement("img");
    img1.src = String(require("./ISync_icon.png"));
    $(document.body).append(img1);

    var img2 = document.createElement("img");
    img2.src = String(require("./Setting-icon.png"));
    $(document.body).append(img2);
});


var a = 'test1';
var b = 'test1';

var arrowFunction = (a, b) => {
    console.log(a);
    console.log(b);
};
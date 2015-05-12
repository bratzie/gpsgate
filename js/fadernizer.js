jQuery(document).ready(fadeSwag);

var fadeTime = 500;
var fadeDelay = 1000;

function fadeSwag() {
	jQuery("#swag").fadeIn(fadeTime).delay(fadeDelay).fadeOut(fadeTime, fadeYolo);
}

function fadeYolo() {
	jQuery("#yolo").fadeIn(fadeTime).delay(fadeDelay).fadeOut(fadeTime, fadeBiz);
}

function fadeBiz() {
	jQuery("#biz").fadeIn(fadeTime).delay(fadeDelay).fadeOut(fadeTime, fadeSwag);
}
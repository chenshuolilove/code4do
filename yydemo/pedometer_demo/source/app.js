/**
 * @Author : zxhuizhi@126.com
 * @Timestamp : 2016-06-16
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
	this.openPage({
		source : "source://view/index.ui",
		statusBarState : "transparent"
	});
});

var channel = require('cordova/channel'),
    exec = require('cordova/exec'),
    cordova = require('cordova');
	
function StartupTask() {
    channel.onCordovaReady.subscribe(function() { });
};
		
StartupTask.prototype.register = function(successCallback, errorCallback) {
   exec(successCallback, errorCallback, "StartupTask", "register", []);
};	

module.exports = new StartupTask();

module.exports = {
    
    register: function (win, fail, args){
        var startupTaskPromise = Windows.ApplicationModel.StartupTask.getAsync("MobileStartupTask");

        startupTaskPromise.then(function (stask) {
            switch (stask.state) {
                case Windows.ApplicationModel.StartupTaskState.disabled:
                    // Task is disabled but can be enabled.
                    return stask.requestEnableAsync(); // ensure that you are on a UI thread when you call RequestEnableAsync()
                    break;
                case Windows.ApplicationModel.StartupTaskState.disabledByUser:
                    break;
                case Windows.ApplicationModel.StartupTaskState.disabledByPolicy:
                    break;
                case Windows.ApplicationModel.StartupTaskState.enabled:
                    break;
            }
        }).then(function () {win()})
    },
};

require("cordova/exec/proxy").add("StartupTask",module.exports);

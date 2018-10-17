$(document).ready(function(){
		chrome.storage.sync.get(["sendurls"], function(items) {
            // Restores select box and checkbox state using the preferences
            // stored in chrome.storage.
            document.getElementById("#cacheUrls").checked = items.sendurls;
            console.log("Cache Urls:", items.sendurls);
            if (items.sendurls) {
                $(".send-cache-urls-toggle .uiToggleSwitch").addClass("uiToggleSwitchOn private-form__toggle-switch--on");
            }
        });


	$(".send-cache-urls-toggle input").change(function() {
            //developerTools.saveSettings();
        $(".send-cache-urls-toggle .uiToggleSwitch").toggleClass("uiToggleSwitchOn private-form__toggle-switch--on");

        var sendUrlsVal = $("#cacheUrls").prop("checked");

        console.log("dark theme is ", darkthemeVal);
        console.log("UI Tweaks is ", uiTweaksVal);
        chrome.storage.sync.set({
            sendurls: sendUrlsVal,
        }, function() {
            // Update status to let user know options were saved.
            //var status = document.getElementById("status");
            //status.textContent = "Options saved. If you have the Design manager open, you will need to refresh to see the theme.";
            setTimeout(function() {
                //status.textContent = "";
            }, 4000);
        });


         
    });
});
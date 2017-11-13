//Version $Id$
/**
 * 
 */
chrome.alarms.create("getInfo", { when: Date.now(), periodInMinutes: 3.0 } );
/**
 * 
 */
chrome.alarms.onAlarm.addListener(function(alarm) {
    //alert(Date.now());
});

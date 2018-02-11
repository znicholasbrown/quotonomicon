browser.contextMenus.create({
    id: "add-to-quotonomicon",
    title: "Add to Quotonomicon",
    contexts: ["selection"]
}, addQuote);

function addQuote () {
    // 

}

browser.contextMenus.onClicked.addListener(function (info) {
    browser.runtime.sendMessage(info.selectionText);
})

browser.browserAction.onClicked.addListener(function () {
    browser.sidebarAction.open();

})

browser.sidebarAction.setPanel({ panel: "/sidebar/quoto.html" });


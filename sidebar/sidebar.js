let quoteList = [
    {
        quote: "My horse! My horse! My kingdom for a horse!"
    },
    {
        quote: "December 7th, 1941. A date which will live in infamy."
    }
]

for ( let i = 0; i < quoteList.length; ++i ) {
    let node = document.createElement("div");                
    let textnode = document.createTextNode(quoteList[i].quote);         
    node.appendChild(textnode);                              
    document.getElementById("list").appendChild(node)
}


function handleMessage(request, sender, sendResponse) {
    // console.log(request);
    quoteList.push({
        quote: request
    })
    let node = document.createElement("div");
    let textnode = document.createTextNode(request);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node)
    // sendResponse({ response: "Response from background script" });
    
}

browser.runtime.onMessage.addListener(handleMessage);
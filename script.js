async function getTab(){

    let [tab] = await chrome.tabs.query({active:true, currentWindow:true})

    const tabId = tab.id

    chrome.scripting.executeScript({
        target: {tabId},
        func: async ()=>{
            let text = document.body.innerText
            alert(text)
     
        },
    })
};

getTab();



// Set up your API key
// add API key here 


async function getSummary(){

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages: [{role:"user", content:"Give me the summary of the following text:"}],
            max_tokens: 150,
        })
    }

    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        
    } catch (error) {

        console.error(error)

    }
    };
getSummary();


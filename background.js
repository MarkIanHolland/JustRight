chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const justEatApiUrl = `https://uk.api.just-eat.io/`
    const justEatApiTenant = `uk`

    fetch(
        `${justEatApiUrl}restaurants/bypostcode/${message}`,
        {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            if (response.status !== 200) {
                sendResponse({result: 'Looks like there was a problem. Status Code: ' +
                  response.status })
                return true;
            }
            return response.json()
        })
        .then((data) => sendResponse({result: data}));
        return true;
    });
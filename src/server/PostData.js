export function PostData(type, userData) {

    let BaseUrl = 'https://api.thewallscript.com/restful/';

    return new Promise((res, rej) => {

        fetch(BaseUrl + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                res(responseJson)
            })
            .catch((error) => {
                rej()
            })
    })
}
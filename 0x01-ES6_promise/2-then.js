function handleResponseFromAPI(promise) {
    promise.then((res) => {return res})
    console.log("Got a response from the API")
}

export default handleResponseFromAPI;
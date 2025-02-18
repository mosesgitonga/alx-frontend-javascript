function getResponseFromAPI() {
    const myPromise = new Promise((resolve, reject) => {
        const bool = true

        if (bool) {
            resolve(true)
        } else {
            reject(false)
        }
    }) 
    return myPromise
}

export default getResponseFromAPI;

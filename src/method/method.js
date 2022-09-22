export function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(result => result.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    });
}
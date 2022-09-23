export function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(result => result.json())
            .then(res => {
                if (res.Response != "False") {
                    resolve(res);
                } else {
                    throw res;
                }
            })
            .catch(err => reject(err));
    });
}
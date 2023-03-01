class Request {
    async get (url) {
        const result = await fetch(url);
        return result.json();
    }

    delete(url){
        return fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }

    post(url, payload){
        return fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
    }

    put(url, payload){
        return fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
    }
}

export default Request;
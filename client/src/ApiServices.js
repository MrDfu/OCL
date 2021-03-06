const BASE_URL = 'http://localhost:3001';
function fetchRequest(path, options) {
    return fetch(BASE_URL + path, options).then(res => res.status < 400 ? res : Promise.reject())
        .then(res => res.status !== 204 ? res.json() : res)
        .catch(err => {
            console.log("Error:", err)
        })
}

function getCharas() {
    return fetchRequest('/chara');
};

function postChara(body) {
    return fetchRequest('/chara', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}

function getOneChara(body) {
    return fetchRequest('/onechara', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}


function getUser(body) {
    return fetchRequest("/getuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}

function updateFavorite(body, id) {
    return fetchRequest(`/upfavorites/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}

function getFavorite() {
    return fetchRequest(`/favorites`

    );
}

const ApiService={getFavorite,updateFavorite,getUser,getOneChara,postChara,getCharas}

export default ApiService;
let host = window.location.hostname;

function getHeaders(vm) {
    const headers = {
    	//'Accept':  'application/json'
    	//'Access-Control-Allow-Origin': 'http://localhost:8081'
    }

    vm.$cookies.get('access_token') && (headers.Authorization = 'Bearer ' + vm.$cookies.get('access_token'));

    return headers
}

export {
    getHeaders
}

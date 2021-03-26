import { getHeaders } from './config'

export const authService = {
    login,
    logout,
}

/**
 * Send request for login user and set token in localstorage
 * 
 * @param {String} email 
 * @param {String} password 
 * @returns {Object}
 */
async function login(data, vm) {
    const requestOptions = {
        method: 'POST',
        headers: { ...getHeaders(vm), 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
    let res = await fetch('https://reqres.in/api/login', requestOptions)
    
    if ( res.error ) {
        this.$swal(res.error, "", "error")
      } else if ( res.token ) {
        vm.$cookies.set('access_token', res.token);
        vm.$router.push('/')
    }    
    let ressPos = await res.json();
    return ressPos
}

/**
 * Send request for logout
 * 
 * @returns {Object}
 */
async function logout(vm) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Authorization': 'Bearer ' + vm.$cookies.get('access_token')
        }
    }; 
    
    let res = await fetch(`${url}/api/logout`, requestOptions)
    let resLogout =  await res.json()

    vm.$cookies.remove('access_token')
    vm.$cookies.remove('refresh_token')

    return resLogout;
}


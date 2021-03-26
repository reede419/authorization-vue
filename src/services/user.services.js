export const userService = {
    get_user,
};

async function get_user(vm) {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + vm.$cookies.get('access_token')}
    };
    let res = await fetch('https://reqres.in/api/users/1', requestOptions)
    let user =  await res.json()
    return user
}


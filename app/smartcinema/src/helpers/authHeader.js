/*
    Returns an HTTP Authorization header containing the Json Web Token (JWT) from storage
 */
export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
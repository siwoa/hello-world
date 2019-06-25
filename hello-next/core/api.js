import fetch from "./fetch";
let api = 'https://11140b99.cpolar.io/';
export const login = () => {
    fetch(api + '/users/login').then(res => {
        return res.json();
    }).then(res => {
        console.log(res);
    })
}  
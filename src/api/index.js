export default function fetchApi() {
    return fetch('http://localhost:3000')
        .then(res => res.json());
}

const BASE_URL = (() => {
    const url = `${window.location.origin}${process.env.PUBLIC_URL}`;
    return url.endsWith('/') ? url : `${url}/`;
})();

export default BASE_URL

const apiHost = "http://www.mocky.io"

export const getList = (success, error, signal) => {
    fetch(
        `${apiHost}/v2/5e22c4bd2f00005b002225f5`,
        {
            method: "GET",
            signal
        }
    )
        .then(res => res.json()).then(success).catch(error);
}

export const getByID = (id, success, error, signal) => {
    fetch(
        `${apiHost}/v2/5e230d4b2f00007f0022268a?id=${id}`,
        {
            method: "GET",
            signal
        }
    )
        .then(res => res.json()).then(success).catch(error);
}

export const create = (data, success, error) => {
    fetch(
        `${apiHost}/v2/5e22ea392f00009a00222634`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    )
        .then(res => res.json()).then(success).catch(error);
}

export const update = (data, success, error) => {
    fetch(
        `${apiHost}/v2/5e22ea392f00009a00222634`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    )
        .then(res => res.json()).then(success).catch(error);
}


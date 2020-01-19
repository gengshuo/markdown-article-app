
const apiHost = "http://localhost:7000"

export const getList = (success, error, signal) => {
    fetch(
        `${apiHost}/articles`,
        {
            method: "GET",
            signal
        }
    )
        .then(res => res.json()).then(success).catch(error);
}

export const getByID = (id, success, error, signal) => {
    fetch(
        `${apiHost}/articles/${id}`,
        {
            method: "GET",
            signal
        }
    )
        .then(res => res.json()).then(success).catch(error);
}

export const create = (data, success, error) => {
    fetch(
        `${apiHost}/articles`,
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
        `${apiHost}/articles/${data.id}`,
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


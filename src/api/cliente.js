
//GET
const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(resposta => {
            return resposta.json()
        })
        .then(json => {
            return json
        })
}

// POST
const cadastrarClientes = (nome, cpf) => {

    const json = JSON.stringify(
        {
            nome: nome,
            cpf: cpf
        }
    )

    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
        .then(resp => {
            return resp.body
        })
}

//DELETE
const deletaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "DELETE"
    })
}

// GET cliente
const detalhaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "GET"
    })
        .then(resposta => {
            return resposta.json()
        })
}

// PUT
const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })

    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
}
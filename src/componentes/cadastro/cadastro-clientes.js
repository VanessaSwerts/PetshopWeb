import { cadastrarClientes } from '../../api/cliente'
import validaCPF from "../validacao/validaCPF"

const eventoEnvia = (form) => {

    const alerta = (classe, mensagem) => {
        const linha = document.createElement('section');

        const conteudoLinha = `
                                <div class="${classe}">${mensagem}</div>
                            `
        linha.innerHTML = conteudoLinha;
        return linha;
    }

    form.addEventListener("submit",
        event => {
            event.preventDefault()

            const nome = event.target.querySelector("[data-nome]").value
            const cpf = event.target.querySelector("[data-cpf]").value

            if (!validaCPF(cpf)) {
                alert('O CPF não é válido')
                return
            }

            cadastrarClientes(nome, cpf)
                .then(() => form.appendChild(alerta(
                    "alert alert-success",
                    "Cadastro realizado com sucesso!"
                ))
                )
                .catch(() => form.appendChild(alerta(
                    "alert alert-warning",
                    "Ops, ocorreu um erro e não foi possível realizar o cadastro!"
                )))

        }
    )
}


export default eventoEnvia
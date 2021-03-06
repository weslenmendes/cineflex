import { api } from "../../services/api";

import { maskCpf } from "../../utils";

import "./style.scss";

const initialState = {
  ids: [],
  name: "",
  cpf: "",
  seats: [],
};

const Form = ({ form, setForm, onSuccess }) => {
  let conditionToSendForm =
    form.cpf.length < 14 || form.name.length < 1 || form.seats.length < 1;

  const handleForm = (e) => {
    e.preventDefault();

    const API_URL = "seats/book-many";
    const sendData = { ids: form.ids, name: form.name, cpf: form.cpf };

    const promise = api.post(API_URL, sendData);

    promise
      .then((res) => {
        setForm(initialState);
        onSuccess("/sucesso");
      })
      .catch((e) => console.log(e));
  };

  const handleInput = (e) => {
    if (e.target.name === "name") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({
        ...form,
        [e.target.name]: maskCpf(e.target.value),
      });
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Nome do comprador:</label>
          <input
            onChange={handleInput}
            value={form.name}
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            required
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF do comprador:</label>
          <input
            onChange={handleInput}
            value={form.cpf}
            type="text"
            id="cpf"
            name="cpf"
            maxLength="14"
            placeholder="Digite seu CPF..."
            required
          />
        </div>

        <div>
          <button disabled={conditionToSendForm} className="btn">
            Reservar assento(s)
          </button>
        </div>
      </form>
    </section>
  );
};

export { Form };

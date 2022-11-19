import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="legend">Kalkulator walut</legend>

            <p>
                <span className="form_currency">
                    Waluta: Polski złoty
                </span>
            </p>

            <p>
                <label>
                    <span className="form__labelText"> Podaj kwotę:</span>

                    <input className="form__field"
                        type="number" min="0.01" required autofocus step="0.01" />

                </label>
            </p>

            <p>
                <label>
                     <span className="form__labelText"> Wybierz walutę docelową: </span>
                  
                    <select name="chooseCurrency" className="form__field--option">
                        <option value="euro" selected>Euro</option>
                        <option value="dolar">Dolar</option>

                    </select>
                </label>
            </p>
        </fieldset>

        <p>
            <button className="form__button">Policz wartość</button>
        </p>

    </form>
);

export default Form;
import "./style.css";
import React, { useState } from 'react';
import currencies from "../currencies";
import {Result} from "./Result";




const Form = ({ convert, result }) => {
    const [content, setContent] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onSubmit = (event) => {
        event.preventDefault();


        convert(content, currency);
        setContent("");
    };

   



    return (
        <form className="form" onSubmit={onSubmit} >
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
                            type="number" min="0.01"
                            required autofocus
                            step="0.01"
                            placeholder="Wpisz kwotę w zł"
                            value={content}
                            onChange={({ target }) => setContent(target.value)} />

                    </label>
                </p>

                <p>
                    <label>
                        <span className="form__labelText"> Wybierz walutę docelową: </span>

                        <select name="chooseCurrency" className="form__field--option"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)} >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )
                            ))}


                        </select>
                    </label>
                </p>
            </fieldset>

            <p>
                <button className="form__button" >Policz wartość</button>
            </p>

            <Result result={result} />
        </form>
    );
};

export default Form;
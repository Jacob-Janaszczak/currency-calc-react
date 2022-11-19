import "./style.css";
import React, { useState } from 'react';



const Form = () => {
    const [content, setContent] = useState("");
    const [currency, setCurrency] = useState();

    const onFormSubmit = (event) =>{
        event.preventDefault();
        setContent("");

    };

    const convert = () => {
        console.log(setContent);
    
      };

    return(
    <form className="form" onSubmit={onFormSubmit} >
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
                        type="number" min="0.01" required autofocus step="0.01" value={content} onChange={({target})=> setContent(target.value)} />

                </label>
            </p>

            <p>
                <label>
                     <span className="form__labelText"> Wybierz walutę docelową: </span>
                  
                    <select name="chooseCurrency" className="form__field--option" value={currency} onChange={({target})=> setCurrency(target.value)} >
                        <option value="euro" selected>Euro</option>
                        <option value="dolar">Dolar</option>

                    </select>
                </label>
            </p>
        </fieldset>

        <p>
            <button className="form__button" onClick={() => convert()} >Policz wartość</button>
        </p>
        <p>SIema</p>
    </form>
    );
};

export default Form;
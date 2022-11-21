import "./style.css";

export const Result = ({result}) => (
    <p className="result">
        {result !== undefined &&(
            <>
            {result.sourceContent.toFixed(2)}&nbsp;PLN&nbsp;= { }

            <strong>
                {result.targetContent.toFixed(2)}&nbsp;{result.currency}
            </strong>
            </>
        )
        }
    
    </p>
)
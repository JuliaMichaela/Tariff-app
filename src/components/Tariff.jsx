import "../styles/tariff.css";

export default function Tariff(props) {
    // const { card, setId, theme } = props;



    return (
        <div className={`card ${classCard}`}>
            <header className={`card_header ${theme.card_header}`}>{card.name}</header>
            <div className={`card_price ${theme.card_price}`}>
                <p className="card_value">{card.priceTextHigh}</p>
                <p className="card_number">{card.price}</p>

                <p className="card_date">{card.priceTextLow}</p>


            </div>
            <div className="card_speed">{card.speed}</div>
            <footer className="card_footer">{card.condition}</footer>
        </div>
    );
}
import { Button } from "react-bootstrap";
import {ReactComponent as Arrow} from 'assets/icons/arrowup.svg';
import styles from "./cryptoCard.module.scss";

function CryptoCard({ data: currency }) {
  return (
    <div className={styles.container}>
      <span className={styles.dummyImg}></span>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2>{currency.name}</h2>
          <span>{currency.id}</span>
        </div>
        <div className={styles.stats}>
          <h2>
            {currency.details?.max_withdrawal_amount}{" "}
            <span> ({randomUp()}) <Arrow /></span>
            
          </h2>
          <Button variant="link">CHANGE</Button>
        </div>
        <hr />
        <div className={styles.rate}>
          <div>
            <h2> {calculateRandom(currency.details?.max_withdrawal_amount)}</h2>
            <Button variant="link">Buy</Button>
          </div>
          <div className="v-saperator ms-3" />
          <div className="ms-2">
            <h2>{calculateRandom(currency.details?.max_withdrawal_amount)}</h2>
            <Button variant="link">Sell</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;

function calculateRandom(max) {
  return Math.floor(Math.random() * max);
}
function randomUp() {
  return (Math.random() * 10).toFixed(2);
}

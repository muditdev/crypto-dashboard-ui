import React from "react";
import { useSelector } from "react-redux";

import { RESPONSE_STATUS } from "const/status";
import styles from "./dashboardMain.module.scss";
import bitcoinImg from "assets/icons/bitcoin.png";
import { Col, Image, Row } from "react-bootstrap";
import CryptoCard from "components/CryptoCard";
import Loading from "components/Loading";

function DashboardMain() {
  const { currencies } = useSelector((state) => state.currencies);
  const { currency, status } = useSelector((state) => state.currency);
  const myCryptos = React.useMemo(() => {
    if (currency) {
      return [currency];
    }
    return currencies?.slice(0, 10);
  }, [currencies, currency]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={bitcoinImg} />
        <h2>My Cryptos</h2>
      </header>
      {status === RESPONSE_STATUS.LOADING && <Loading />}
      {status === RESPONSE_STATUS.ERROR && (
        <div>Sorry, content not found !</div>
      )}
      <Row
        className={
          status === RESPONSE_STATUS.LOADING ? styles.loadingState : ""
        }
      >
        {myCryptos.map((crypto) => (
          <Col md={12} lg={6} xl={4} key={crypto.id}>
            <CryptoCard data={crypto} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DashboardMain;

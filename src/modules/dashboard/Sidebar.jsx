import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RESPONSE_STATUS } from "const/status";
import { fetchCurrency } from "store/currencySlice";
import { ReactComponent as LeftArrow } from "assets/icons/arrowLeft.svg";
import styles from "./sidebar.module.scss";
import Search from "components/Search";
import Loading from "components/Loading";

function Sidebar() {
  const dispatch = useDispatch();
  const { currencies, status } = useSelector((state) => state.currencies);
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchResults = React.useMemo(() => {
    if (searchQuery.length > 1) {
      return currencies.filter((currency) => {
        return currency.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    return null;
  }, [currencies, searchQuery]);
  const isSearching = React.useMemo(() => {
    return searchQuery.length > 1 && searchResults !== null;
  }, [searchQuery.length, searchResults]);

  const selectCurrency = React.useCallback(
    (id) => {
      dispatch(fetchCurrency(id));
    },
    [dispatch]
  );
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className="d-flex align-items-center">
          <LeftArrow />
          <h2>Cryptos ({currencies?.length})</h2>
        </div>
        <Search onSearch={(query) => setSearchQuery(query)} />
      </header>

      {status === RESPONSE_STATUS.SUCCESS && (
        <CryptoList
          data={isSearching ? searchResults : currencies}
          onSelect={selectCurrency}
        />
      )}
      {status === RESPONSE_STATUS.LOADING && <Loading />}
      {status === RESPONSE_STATUS.ERROR && (
        <div>Error! No currencies found, try again later.</div>
      )}
    </aside>
  );
}

function CryptoList({ data: currencies, onSelect }) {
  const { currency: activeCurrency } = useSelector((state) => state.currency);

  return (
    <ul className={styles.cryptoList}>
      {currencies.map((currency) => (
        <li
          key={currency.id}
          className={`${styles.cryptoListItem} ${
            activeCurrency?.id === currency.id ? styles.active : ""
          }`}
          onClick={() => onSelect(currency.id)}
        >
          <div className={styles.inner}>
            <span className={styles.defaultIcon}></span>
            <div className="ms-3">
              <h4>{currency.id}</h4>
              <p>{currency.name}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;

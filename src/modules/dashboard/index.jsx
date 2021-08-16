import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { getAllCurrency } from "store/currenciesSlice";
import DashboardMain from "./DashboardMain";
import Sidebar from "./Sidebar";
import styles from "./dashboard.module.scss";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);
  return (
    <Container className={styles.container}>
      <Row>
        <Col md={4} lg={3}>
          <Sidebar />
        </Col>
        <Col md={8} lg={9}>
          <DashboardMain />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 검색이 있다
//2. 리스트에 유저 이름과 전화번호 추가할 수 있다
//3. 리스트에 아이템이 몇 개 있는지 보인다
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <Container>
      <h1 className="title">연락처</h1>
      <Row>
        <Col className="border-column">
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

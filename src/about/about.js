import { useContext } from "react";
import styled from "styled-components";
import ContextGlobal from "../contextGlobal/contextGlobal";
import { Col, Row, Card } from "antd";

import { DiMysql } from "react-icons/di";
import { IoLogoPython } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const StyledDivContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 8rem;
    text-align: center;
  }
`;

const StyledTextoInicialIntro = styled.h3`
  color: #e0f2f1;
  letter-spacing: 0.4px;
  padding-top: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: -10rem;
    font-size: 14px;
    font-weight: 600;
  }
`;

const StyledTextoInicialAbout = styled.h1`
  color: #e0f2f1;
  font-size: 25px;
  letter-spacing: 0.2px;
  font-weight: 600;
  text-align: center;
`;

const StyledDivIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background-color: #1c2128cb;
  box-shadow: 0 0.225rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  const { aboutRef } = useContext(ContextGlobal);

  return (
    <StyledDivContainer>
      <div>
        <StyledTextoInicialIntro ref={aboutRef}>
          My <span style={{ color: "#26A69A" }}>Intro</span>
        </StyledTextoInicialIntro>
        <StyledTextoInicialAbout>About Me</StyledTextoInicialAbout>
      </div>
      <Row gutter={30} style={{ marginTop: "5rem" }}>
        <Col xs={24} sm={8} style={{ marginBottom: "4rem" }}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#212731",
              boxShadow: "0 0.215rem 0.9rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <StyledDivIcon>
              <FaReact color='#80cbc4' fontSize={35} />
            </StyledDivIcon>
          </Card>
        </Col>
        <Col xs={24} sm={8} style={{ marginBottom: "4rem" }}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#212731",
              boxShadow: "0 0.215rem 0.9rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <StyledDivIcon>
              <FaBootstrap color='#80cbc4' fontSize={35} />
            </StyledDivIcon>
          </Card>
        </Col>
        <Col xs={24} sm={8} style={{ marginBottom: "4rem" }}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#212731",
              boxShadow: "0 0.215rem 0.9rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <StyledDivIcon>
              <SiStyledcomponents color='#80cbc4' fontSize={37} />
            </StyledDivIcon>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={{ span: 8, offset: 4 }}
          style={{
            marginBottom: "4rem",
          }}
        >
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#212731",
              boxShadow: "0 0.215rem 0.9rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <StyledDivIcon>
              <IoLogoPython color='#80cbc4' fontSize={35} />
            </StyledDivIcon>
          </Card>
        </Col>
        <Col xs={24} sm={8} style={{ marginBottom: "5.5rem" }}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#212731",
              boxShadow: "0 0.215rem 0.9rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <StyledDivIcon>
              <DiMysql color='#80cbc4' fontSize={35} />
            </StyledDivIcon>
          </Card>
        </Col>
      </Row>
    </StyledDivContainer>
  );
}

export default About;

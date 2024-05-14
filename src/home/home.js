import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { VscGithubAlt } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import imgAmico from "../assets/amigo.png";

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 105vh;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
    padding-top: 8rem;
    min-height: 110vh;
  }
`;

const StyledDivTypewriter = styled.div`
  display: flex;
  margin-top: -5rem;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0rem;
  }
`;

const Styledh1 = styled.h1`
  color: #222831;
  font-size: 36px;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 30px;
    font-weight: 200;
  }
`;

const StyledSpan = styled.span`
  font-weight: 700;
  color: #222831;
`;

const StyledP = styled.p`
  width: 70%;
  font-weight: 400;
  color: #728f9e;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    width: 100%;
  }
`;

const StyledALinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #222831;
  color: #d0ebea;
  border-radius: 50px;
  transition: 300ms;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const StyledDivAlinharLinks = styled.div`
  display: flex;
  margin-top: 40px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

const StyledDivImg = styled.div`
  margin-top: -3rem;
  @media (max-width: 950px) {
    margin-top: 0rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 23.5rem;
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 950px) {
    width: 16.5rem;
  }
`;

function Home() {
  return (
    <StyledDivContainer>
      <div>
        <StyledDivTypewriter>
          <Styledh1>
            Bring{" "}
            <StyledSpan>
              <Typewriter
                words={["design", "beauty", "elegance", "efficiency"]}
                loop={false}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </StyledSpan>
            <br />
            to your webapp.
          </Styledh1>
        </StyledDivTypewriter>
        <div
          style={{
            marginBottom: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <StyledP>
            With knowledge in web development and design, i offer the best
            projects resulting in quality work.
          </StyledP>
        </div>
        <StyledDivAlinharLinks>
          <StyledALinks
            href='https://www.linkedin.com/in/gabriel-campos-sanini/'
            target='_blank'
          >
            <GrLinkedinOption fontSize={18} />
          </StyledALinks>
          <StyledALinks
            href='https://github.com/Gsanini'
            target='_blank'
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            <VscGithubAlt fontSize={18} />
          </StyledALinks>
          <StyledALinks href='https://wa.me/5551992208496' target='_blank'>
            <FaWhatsapp fontSize={18} />
          </StyledALinks>
        </StyledDivAlinharLinks>
      </div>
      <div>
        <StyledDivImg>
          <StyledImg src={imgAmico} alt='imgperfil'></StyledImg>
        </StyledDivImg>
      </div>
    </StyledDivContainer>
  );
}

export default Home;

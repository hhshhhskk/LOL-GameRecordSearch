import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  border-bottom: solid white;
  position: fixed;
  top: 0;
  width: 100%;
  fill: #3F8CF2;
  stroke: white;
  stroke-width: 30;
  background-color: #3F8CF2;
  display: inline-flex;
  justify-content: space-between;
`;

const HomeSvg = styled.svg`
  cursor: pointer;
  margin-top: 4px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

const HomeLoginButton = styled.button`
    cursor: pointer;
    font-size: 22px;
    font-family: "Jua";
    color: white;
    background-color: #3F8CF2;
    border: 0;
`;

export function Header() {
    const navigate = useNavigate();
    const onHome = () => {
        navigate(`/`);
    };
    const onLogin = () => {
        navigate(`/Login`);
    };
    return (
        <>
            <HeaderDiv>
                <HomeSvg
                    onClick={onHome}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z" />
                </HomeSvg>
                <HomeLoginButton onClick={onLogin}>Login</HomeLoginButton>
            </HeaderDiv>
        </>
    )
}
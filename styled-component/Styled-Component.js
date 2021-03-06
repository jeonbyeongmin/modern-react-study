import styled, { keyframes } from "styled-components";

// animation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  animation: ${rotateAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        <Emoji>๐</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

/**
 *
 * styled-components๋ผ ์ ๋ง๋ค์ด์ก์๊น?
 * ๋ฐ์  ์์ css -> sass -> BEM -> css.module -> styled-components
 *
 * Css-in-Js ๋ผ๊ณ  ํ๋ ๊ฒ๋ค์ ๋ค ์ต์ข ๋ฐ์  ๋จ๊ณ์ด๋ค.
 * ์๋ฒฝํ๋ค๊ณ ๋ ํ  ์ ์์ง๋ง ๊ธฐ์กด์ ๋ฌธ์ ์ ๋ค์ ํด๊ฒฐํ๊ธฐ ์ํด ๋ง๋ค์ด์ง ๊ฒ์ ํ์คํ๋ค.
 *
 * ๊ทธ๋ ๋ค๋ฉด styled-components๋ ์ด๋ค ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๋๊ฐ?
 * 1. ์ปดํฌ๋ํธ ์ด๋ฆ์ด UI ์ญํ ์ ๊ฒฐ์ ์ง๊ธฐ ๋๋ฌธ์ ์๋นํ ์ง๊ด์ ์ด๋ค. (๊ธฐ์กด์๋ ์ฝ๋์ div ํฌ์ฑ์ด์๋ค.)
 * 2. css.module๋ก ํด๋์ค๋ช์ด ์ค๋ณต๋์ด ๋ฐ์ํ๋ ๋ฌธ์ ๋ ํด๊ฒฐํ  ์ ์์์ง๋ง ์ฌ์ ํ ํด๋์ค๋ช์ ๊ด๋ฆฌํ๋ ๋ฒ๊ฑฐ๋ก์์ ์กด์ฌํ๋ค.
 *
 * ๋ ๊ณต๋ถํด๋ณผ ๊ฒ.
 * ๋ชจ๋  ๋ฌธ์ ์์ styled-components๊ฐ ์ข์๊น?
 *
 */

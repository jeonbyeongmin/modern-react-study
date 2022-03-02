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
        <Emoji>😁</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

/**
 *
 * styled-components라 왜 만들어졌을까?
 * 발전 순서 css -> sass -> BEM -> css.module -> styled-components
 *
 * Css-in-Js 라고 하는 것들은 다 최종 발전 단계이다.
 * 완벽하다고는 할 수 없지만 기존의 문제점들을 해결하기 위해 만들어진 것은 확실하다.
 *
 * 그렇다면 styled-components는 어떤 문제를 해결하는가?
 * 1. 컴포넌트 이름이 UI 역할을 결정짓기 때문에 상당히 직관적이다. (기존에는 코드에 div 투성이였다.)
 * 2. css.module로 클래스명이 중복되어 발생하던 문제는 해결할 수 있었지만 여전히 클래스명을 관리하는 번거로움은 존재했다.
 *
 * 더 공부해볼 것.
 * 모든 문제에서 styled-components가 좋을까?
 *
 */

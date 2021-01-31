import styled from "styled-components";

export const StBaseImage: any = styled.img`
  cursor: pointer;
  width: ${({ width }: any) => width ? width : 'inherit'};
  height: ${({ height }: any) => height ? height : 'inherit'};
  margin-top: ${({ innertext }: any) => innertext ? `1rem` : '0'};
  transition: width linear 100ms, height linear 100ms;
`

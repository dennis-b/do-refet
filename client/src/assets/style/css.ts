import { css } from "styled-components";


export const BlueLinearBG = css`
  background: ${({
                   theme: {
                     colors: {
                       darkBlue,
                       darkestBlue
                     }
                   }
                 }) => `linear-gradient(90deg, ${darkestBlue} -5.17%, ${darkBlue} 46.53%, ${darkBlue} 101.18%)`};
`;

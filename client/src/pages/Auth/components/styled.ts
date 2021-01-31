import styled from "styled-components";
import { AppTheme } from "@assets/style";
import { AppAssets } from "@assets/index";

export const Root: any = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ${AppTheme.colors.blueDark};
  overflow: hidden;
  align-items: center;
`;

export const StFormContainer: any = styled.div`
  background-image: linear-gradient(to right, rgba(0, 13, 22, 0.78), rgba(9, 18, 24, 0.82) 34%, rgba(28, 28, 28, 0.86) 70%, #1c1c1c);
  display: flex;
  width: 70%;
  height: 500px;
  justify-content: center;
  transition: all 1000ms;
`;


export const StFullLogoContainer: any = styled.div`
  width: 10%;
  height: 10%;
  position: absolute;
  top: 0;
  margin-top: 40px;
  transition: all 850ms;
  transition-delay: 150ms;
`

export const StFullLogoIcon: any = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
`;

export const StyledFreedomIcon: any = styled.div`
  background-image: url(${AppAssets.Images.freedom});
  background-repeat: no-repeat;
  margin: auto;
  height: 100%;
  background-size: cover;
  opacity: 0.5;
  background-position: center;
`;

export const StyledLogoText = styled.h4`
  color: #a2a2a2;
  font: 400 100px/1.3 'Arizonia', Helvetica, sans-serif;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-bottom: 2rem;
`

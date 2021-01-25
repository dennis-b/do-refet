import { Card, CardHeader } from "@material-ui/core";
import styled from "styled-components";


export const StyledCard = styled(Card)`
  &&{
      position: relative;
      margin-top: 40px;
      border-radius: 4px;
      transition: 0.3s;
      width: 100%;
      overflow: initial;
      background: #ffffff;
      display: flex;
      justify-content: center;
      padding-top: 2rem;
  }
`

export const StyledCardHeader = styled(CardHeader)`
  &&{
    position: absolute;
    top: 15px;
    width: 80%;
    padding: 10px;
    border-radius: 4px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    .MuiCardHeader-title{
      font-size: 15px;
    }
    
  }
  
`


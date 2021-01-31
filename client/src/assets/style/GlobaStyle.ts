import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    .cesium-viewer-bottom {
      display: none;
    }

    .cesium-viewer-animationContainer {
      display: none;
    }

    .cesium-viewer-toolbar > *:not(.cesium-navigationHelpButton-wrapper) {
      display: none;
    }

    .cesium-navigationHelpButton-wrapper {
      .cesium-toolbar-button {
        display: none;
      }
    }

    .cesium-viewer-toolbar {
      right: 30%;
      bottom: 440px;
      top: auto
    }
  }
`;

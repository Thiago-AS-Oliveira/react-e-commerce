import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --magnolia: #F7F1FF;
        --bunker: #141B1E;
        --bunker-opaque: #141B1E55;
        --picton-blue: #51D1F1;
        --dark-gray: #aaa;
        --red: #fa5e5e;
        --green: #5CB85C;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: "Urbanist", sans-serif;
        background-color: var(--magnolia);
        color: var(--bunker);
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background-color: var(--magnolia);
          border-radius: 5px;
        }   

        ::-webkit-scrollbar-thumb {
          background-color: var(--bunker-opaque);
          border: 2px solid var(--magnolia);
          border-radius: 5px;
        }
    }

    #root {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

`

export default GlobalStyle

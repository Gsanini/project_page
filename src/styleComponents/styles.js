import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
    width: 7px; /* Largura da scrollbar */
    height: 8px; /* Altura da scrollbar */
    border-radius: 4px; /* Raio das bordas arredondadas */
}

  &::-webkit-scrollbar {
    width: 7px; /* Largura da scrollbar */
    height: 8px; /* Altura da scrollbar */
    border-radius: 4px; /* Raio das bordas arredondadas */
  }

  /* Cor da scrollbar de fundo */
  &::-webkit-scrollbar-track {
    background: #e0f2f1;
  }

  /* Cor do "thumb" (a parte que você arrasta) */
  &::-webkit-scrollbar-thumb {
    background: #adb5bd;
    opacity: 0.5;
    border-radius: 4px; /* Raio das bordas arredondadas */
  }
  }
`;

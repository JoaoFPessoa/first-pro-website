import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
*{
        margin: 0;
        padding: 0;
    }
    
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
        font-family: 'DM Sans', sans-serif;
        font-family: 'Inter', sans-serif;
        background: #191919;
        @media(max-width:768px){
            max-width: 500px;
        }
    }`
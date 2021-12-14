import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
*{
        margin: 0;
        padding: 0;
    }
    
    html, body, #root{
        font-family: 'Inter', 'DM Sans', sans-serif;
        background: #191919;
        @media(max-width:768px){
            overflow-x: hidden;
        }
    }`
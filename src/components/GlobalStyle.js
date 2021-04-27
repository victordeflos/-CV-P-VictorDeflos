import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
    h1{
    font-weight:bold;
    font-size: 4rem;
    }
h2{
    color:white;
    font-size:2rem;
   
}
h3{
color: white;
font-size:1.6rem;

}



h4 {
    font-weight:bold;
    font-size: 2rem;
    font-family: "Lobster";

}

linka{
    font-size:1.1.rem;
}


span{
    font-weight:bold;
    color:turquoise;
}
p{
    padding:3rem 0rem;
    color:white;
    font-size:1.2rem; 
    line-height:150%;
    font-family: 'inter', sans-serif,
}

body{
    background: black;
    font-family: 'inter', sans-serif, 'Lobster';
   
    
    }


button{
    font-weight:lighter;
    font-size:1rem;
cursor:pointer;
padding:2px ;
border: 2px solid turquoise;
background:transparent;
color: skyblue;
transition: all 0,5s ease;
font-family: 'inter', sans-serif;
&:hover{
    background-color:skyblue;
    color: white;

}


}`;

export default GlobalStyle;

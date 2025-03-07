
body {
font-family: Arial, sans-serif;
background-color: #f4f4f4;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
margin: 0;
}
/* Estilo para o cabeçalho */
header {
text-align: center;
background-color: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
margin-bottom: 30px;
}
/* Estilo para o título */
h1 {
color: #333;
}
/* Estilo para a imagem */
#foto1 {
width: 200px;
height: 200px;
border-radius: 50%;
margin-top: 15px;
}
/* Estilo para o botão */
button {
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 5px;
transition: background-color 0.3s ease, transform 0.2s ease;
}
/* Efeito no botão ao passar o mouse */
button:hover {
background-color: #45a049;
transform: scale(1.05);
}
/* Estilo para o container do círculo (inicialmente escondido) */
#circulo-container {
display: none;
margin-top: 30px;
text-align: center;
}
/* Estilo para o círculo */
.circulo {
width: 150px;
height: 150px;
background-color: #ff6347;
border-radius: 50%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 20px;
font-weight: bold;

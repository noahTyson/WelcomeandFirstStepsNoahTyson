<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Expanding Cards</title>
</head>

<body>

  <div class="container">
    <div class="panel active" style="background-image:url('https://images8.alphacoders.com/131/1317374.jpeg') ;">
      <h3>Jiraiya</h3>
    </div>
    <div class="panel " style="background-image:url('https://i.vgy.me/hZKiun.png') ;">
      <h3>Orochimaru</h3>
    </div>
    <div class="panel " style="background-image:url('https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/38e2c9d4-85f9-44a0-b239-c13874562585/width=450/1664760083604990-3182796488.jpeg') ;">
      <h3>Tsuande</h3>
    </div>
  </div>
  <script src="script.js"></script>
</body>

</html>

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removerActiveClasses()
        panel.classList.add('active')
    })

})
function removerActiveClasses() {
    panels.forEach(panel => { 
        panel.classList.remove('active')
    })

@import url('https://fonts.googleapis.com/css?fanily=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}


.container{
  display:flex ;
  width:90vw ;
}
.panel{
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}
.panel h3 { 
  font-size: 24;
  position:absolute;
  bottom:20px;
  left: 400px;
  margin: 0;
  opacity: 0;
}
.panel.active{
  flex:3;
}
.panel.active h3{
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
@media(max-width:480px){
  .container{
    width: 100vw;
  
  }
  .panel:nth-of-type(4),
  .panel:nth-of-type(5){
    display: none;
  }
}}
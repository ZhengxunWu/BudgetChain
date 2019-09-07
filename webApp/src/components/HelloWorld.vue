<template>
  <head>
    <title>BudgetChain</title>
  </head>
  <body>
	<span v-html="rawHtml">
	  <body class = "gradient">
		<div class="center">
			<div class="mainText fade hover">Hi</div><br>
			<button class="button" onclick="window.location.href = 'route1';" type="button"> Submit Request</button>
		</div>
	  </body>
	</span>
  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

header {
  display: block;
  background-color: black;
  width: 100%;
  height: 50px;
  color: white;
}

button {
  background-color: blue;
  border-radius: 2px;
  color: white;
  padding: 15px 25px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
button:hover {
  background-color: green;
}
fade{
	opacity:0.5;
}
fade:hover{
	opacity:1;
}
grow:hover
{
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
}
gradient{
	background-image: linear-gradient(blue, cyan);
}
mainText{
	text-align: center;
	font-size: 30pt;
	color: white
}
center{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
swing:hover
{
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
headerButtons {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
navButton {
  float: right;
}
footer {
  display: block;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
}

</style>

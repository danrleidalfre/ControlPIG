// lógica do cálculo de suínos
function compilar(){
	var alimentacao = document.formulario.alimentacao;
	var alimentacao_selecionada = ""; 
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo";		
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e soja";		
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e milho";		
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e outros";		
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja e milho";		
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja e outros";		
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, milho e outros";		
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja, milho e outros";		
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "soja";		
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "soja e milho";		
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "soja e outros";		
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "soja, milho e outros";		
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "milho";		
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "milho e outros";		
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "outros";		
	}
	if (formulario.raca.value === "" || 
		formulario.idade.value === "" || 
		formulario.sexo.value === "" ||		
		alimentacao_selecionada === "" ||
		formulario.criacao.value === "" ||
		formulario.cio.value === "") {
		alert("Verifique os campos não preenchidos")
	}else{
		return abrir();
	}	
}	

function abrir(){
	document.getElementById('popup').style.display = 'block';

	var control = 3;

	var raca = formulario.raca.value;	
	if (raca === "large_white") {
		control = control + 4;
	}
	if (raca === "landrace") {
		control = control + 4;
	}	
	if (raca === "duroc") {
		control = control + 3;
	}
	if (raca === "pietrain") {
		control = control + 3;
	}
	if (raca === "hampshire") {
		control = control + 2.5;
	}
	if (raca === "wessex") {
		control = control + 3;
	}
	if (raca === "mouro") {
		control = control + 4;
	}
	if (raca === "piaui") {
		control = control + 3;
	}
	if (raca === "nilo") {
		control = control + 2.5;
	}
	if (raca === "canastra") {
		control = control + 2;
	}			

	var idade = formulario.idade.value;
	if (idade === "4") {
		control = control + 2;		
	}
	if (idade === "5") {
		control = control + 1;		
	}
	if (idade === "6") {
		control = control;		
	}
	if (idade === "7") {	
		control = control - 0.5;	
	}
	if (idade === "8") {
		control = control - 1;		
	}

	var sexo = document.formulario.sexo.value;
	if (sexo === "sim") {
		control = control + 0.5;
	}
	if (sexo === "nao") {
		control = control - 0.5;
	}

	var alimentacao = document.formulario.alimentacao;
	var alimentacao_selecionada = ""; 
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo";
		control = control + 0.5;
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e soja";
		control = control + 0.75;
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e milho";
		control = control + 0.75;
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo e outros";
		control = control + 0.5;
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja e milho";
		control = control + 1;
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja e outros";
		control = control + 0.5;
	}
	if (alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, milho e outros";
		control = control + 0.5;
	}
	if (alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "trigo, soja, milho e outros";
		control = control + 1.5;
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "soja";
		control = control + 0.5;
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "soja e milho";
		control = control + 0.75;
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "soja e outros";
		control = control + 0.5;
	}
	if (!alimentacao[0].checked && 
		alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "soja, milho e outros";
		control = control + 0.75;
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		!alimentacao[3].checked) {
		alimentacao_selecionada = "milho";
		control = control + 0.5;
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "milho e outros";
		control = control + 0.5;
	}
	if (!alimentacao[0].checked && 
		!alimentacao[1].checked && 
		!alimentacao[2].checked && 
		alimentacao[3].checked) {
		alimentacao_selecionada = "outros";
		control = control + 0.5;
	}	

	var criacao = document.formulario.criacao.value;	
	if (criacao === "otima") {
		control = control + 1.5;
	}
	if (criacao === "boa") {
		control = control -1;
	}
	if (criacao === "ruim") {
		control = control - 2.5;
	}	

	var cio = document.formulario.cio.value;	
	if (cio === "sim") {
		control = control + 0.5;
	}
	if (cio === "nao") {
		control = control - 1.5;
	}

	var control_arredondado = parseFloat(control.toFixed(0));
	
	document.getElementById('resultado').value = control_arredondado;			
}

function fechar(){
	document.getElementById('popup').style.display = 'none';
}
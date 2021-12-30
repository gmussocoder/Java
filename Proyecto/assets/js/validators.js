/* Validación de Correo Electrónico:*/
let uce = "ev-468c37dbf9cd313a7cfa8f5c9b884506";
function validateEmail(email){
	let url = encodeURI(`https://api.email-validator.net/api/verify?EmailAddress=${email}&APIKey=${uce}`);
	$.ajax({
    url: url,
    type : 'GET',        
    dataType: 'json',
    success : onSuccess,   
    error : onError,
    complete : onComplete
	});    
}
function onSuccess(response){
	console.log("response ",response);
  alert(response.details);
}
function onError(xhr, status){
	console.log("xhr, status ",xhr, status);
}
function onComplete(xhr, status){
	console.log("xhr, status ",xhr, status);
}
$("#email").blur(function () {
    validateEmail($(this).val())
});
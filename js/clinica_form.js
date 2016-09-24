$(document).ready(function(){
	$("#tbClinica").on('click','.btnDelete',function(){
		$(this).closest('tr').remove();
	});

	$("#btnAdd").on('click',function(){
		var nombre = document.getElementById("nombreClinica").value.toString();
		var hInicio = document.getElementById("hIni").value.toString();
		var hFin = document.getElementById("hFin").value.toString();
		var desc = document.getElementById("desc").value.toString();
		var newRow = "<tr>"
						+"<td>"+nombre+"</td>"
						+"<td>"+hInicio+"-"+hFin+"</td>"
						+"<td>33.10%</td>"
						+"<td>"
							+"<a data-toggle='modal' data-target='#myModalInfo' style='padding-right:2px'><i class='fa fa-1x fa-search' style='color:#006666'></i></a>"
							+"<a data-toggle='modal' data-target='#myModalEdit' style='padding-right:2px'><i class='fa fa-1x fa-pencil' style='color:#0e2451'></i></a>"
							+"<a class='btnDelete'><i class='fa fa-1x fa-trash-o' style='color:grey'></i></a>"
						+"</td>"
						+"</tr>";
		$("#tbClinica").append(newRow);
	});

	$("#tbClinica").on('click','.btnInfo',function(){
		var x = $(this).closest('tr');
		
		console.log(x);
		document.getElementById('horario_info').innerHTML = "asdasdas";
	});

	
});
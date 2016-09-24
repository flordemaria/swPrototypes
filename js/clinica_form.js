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
							+"<a data-toggle='modal' data-target='#myModalInfo' style='padding-right:2px'><i class='fa fa-1x fa-search'></i></a>"
							+"<a data-toggle='modal' data-target='#myModalEdit' style='padding-right:2px'><i class='fa fa-1x fa-pencil'></i></a>"
							+"<a class='btnDelete'><i class='fa fa-1x fa-trash-o' style='padding-right:2px'></i></a>"
						+"</td>"
						+"</tr>";
		$("#tbClinica").append(newRow);
	});
});
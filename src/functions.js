export function formatarData ( data ) {
  if(data){
  
    const DATA = data; 
    const DATA_E_HORA = DATA.split('T'); 
    const DATA_QUEBRADA = DATA_E_HORA[0].split('-');  
    const DATA_FORMATADA = `${DATA_QUEBRADA[2]}/${DATA_QUEBRADA[1]}/${DATA_QUEBRADA[0]}`; 

    return DATA_FORMATADA;

  } else {
    return "Não informado";
  }
}

export function formatDate(d) {
  var 
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

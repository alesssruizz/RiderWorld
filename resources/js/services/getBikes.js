const headers = {
  headers: { 'X-Api-Key': 'pTTvZwAiQ8rUQfSfx/ByGQ==YOqcr4CKIjc50KyM' },
  contentType: 'application/json'
}

export default async function getBikes ({ make = '', model = '', year = '' }) {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/motorcycles?make=' + make + '&model=' + model + '&year=' + year + '&offset=0', headers)
    const bikes = await response.json()

    return bikes?.map(bike => ({
      id: `${bike.make}-${bike.model}-${bike.year}`,
      fabricante: bike.make,
      modelo: bike.model,
      año: bike.year,
      tipo: bike.type,
      cilindrada: bike.displacement,
      potencia: bike.power,
      torque: bike.torque,
      numMarchas: bike.gearbox,
      peso: bike.total_weight
    }))
  } catch (e) {
    throw new Error('Error al hacer la petición de datos')
  }
}

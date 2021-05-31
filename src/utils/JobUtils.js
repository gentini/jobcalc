module.exports = {
  remainingDays(job) {
    // calculo de tempo restante
      // Total de horas do projeto / pela qtde de horas por dia = Total de Dias
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
  
      // criar data de criação do projeto
      const createdDate = new Date(job.created_at)
      // adicionar o total de dias a data de criação, para criar data futura - data vencimento
      const dueDay = createdDate.getDate() + Number(remainingDays) 
      // criar data futuro - data vencimento
      const dueDateInMs = createdDate.setDate(dueDay)
      // criar diferença do tempo
      const timeDiffInMs = dueDateInMs - Date.now()
      // transformar milisegundos em dias
      const dayInMs = 1000 * 60 * 60 * 24
      // diferença em dias
      const dayDiff = Math.floor(timeDiffInMs / dayInMs)
  
      // restam x Dias
      return dayDiff
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}
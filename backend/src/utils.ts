export const getDate = () => {
  const date = new Date()

  const year = date.getFullYear()
  let month = String(date.getMonth() + 1)
  let day = String(date.getDate())
  let hours = String(date.getHours())
  let minutes = String(date.getMinutes())
  let seconds = String(date.getSeconds())

  if (Number(month) < 10) {
    month = '0' + month
  }

  if (Number(day) < 10) {
    day = '0' + day
  }

  if (Number(hours) < 10) {
    hours = '0' + hours
  }

  if (Number(minutes) < 10) {
    minutes = '0' + minutes
  }

  if (Number(seconds) < 10) {
    seconds = '0' + seconds
  }

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

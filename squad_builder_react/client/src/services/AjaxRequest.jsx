class AjaxRequest{

  get(url, done){
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    console.log(xhr)
    xhr.open("GET", url)

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response), xhr.status) 
    }

    xhr.onerror = () => {
      done(xhr.response) 
    }
    xhr.send()
  }

  post(url, payload, done){
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response))
    }

    xhr.onerror = () => {
      done(xhr.response)
    }

    xhr.send(payload)
  }

}

export default AjaxRequest
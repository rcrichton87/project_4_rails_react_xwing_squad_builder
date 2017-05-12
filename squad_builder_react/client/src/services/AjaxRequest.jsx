class AjaxRequest{

  get(url, done){ 
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open("GET", url)

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response), xhr.status) 
    }

    xhr.onerror = () => {
      done(xhr.response) 
    }

    xhr.send()

  }

}

export default AjaxRequest
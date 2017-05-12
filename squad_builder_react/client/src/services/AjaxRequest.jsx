class AjaxRequest{

  constructor(){
    this.xhr = new XMLHttpRequest()
    this.xhr.withCredentials = true
  }

  get(url, done){ 
    this.xhr.open("GET", url)

    this.xhr.onload = () => {
      done(null, JSON.parse(this.xhr.response), this.xhr.status) 
    }

    this.xhr.onerror = () => {
      done(this.xhr.response) 
    }
    this.xhr.send()
  }

  post(url, payload, done){
    this.xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")

    this.xhr.onload = () => {
      done(null, JSON.parse(this.xhr.response))
    }

    this.xhr.onerror = () => {
      done(this.xhr.response)
    }

    this.xhr.send(payload)
  }

}

export default AjaxRequest
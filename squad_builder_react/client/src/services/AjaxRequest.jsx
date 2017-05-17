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
    console.log(url)
    this.xhr.open("POST", url)
    this.xhr.setRequestHeader("Content-Type", "application/json")

    this.xhr.onload = () => {
      done(null, JSON.parse(this.xhr.response))
    }

    this.xhr.onerror = () => {
      done(this.xhr.response)
    }

    this.xhr.send(payload)
  }

  put(url, payload, done){
    this.xhr.open("PUT", url)
    this.xhr.setRequestHeader("Content-Type", "application/json")

    this.xhr.onload = () => {
      console.log(this.xhr.response)
      done(null, JSON.parse(this.xhr.response))
    }

    this.xhr.onerror = () => {
      done(this.xhr.response)
    }

    this.xhr.send(payload)
  }

  delete(url, done){
    this.xhr.open("DELETE", url)
    this.xhr.setRequestHeader("Content-Type", "application/json")

    this.xhr.onload = () => {
      done(null, this.xhr.status)
    }

    this.xhr.onerror = () => {
      done(this.xhr.response)
    }

    this.xhr.send()
  }

}

export default AjaxRequest
const http = require('http')

// ctx等同于this

// koa模块
class koa {
  constructor() {
    this.middleware = []
    this.count = 0
  }
  use(fn) {
    this.middleware.push(fn)
    return this
  }
  next() {
    let fn = this.middleware[++this.count]
    fn && (fn.prototype ? fn.call(this, this) : fn(this))
  }
  callback() {
    return (request, response) => {
      console.log(1212)
      response.writeHead(200, { 'Content-Type': 'text/html' })
      this.count = 0
      this.request = request
      this.response = response
      this.middleware[0].call(this, this)
      response.end()
    }
  }
  listen(port) {
    http.createServer(this.callback()).listen(port)
  }
}

let app = new koa()

app.use(function () {
  this.response.write('{1')
  this.next()
  this.response.write('1}')
}).use((ctx) => {
  ctx.response.write('{2')
  ctx.next()
  ctx.response.write('2}')
}).use((ctx) => {
  ctx.response.write('{3')
  ctx.next()
  ctx.response.write('3}')
}).use(function (ctx) {
  ctx.response.write('{4')
  ctx.next()
  ctx.response.write('4}')
}).use(function (ctx) {
  ctx.response.write('{5')
  this.next()
  ctx.response.write('5}')
}).use(function (ctx) {
  ctx.response.write('{6')
  this.next()
  ctx.response.write('|6}')
})

app.listen(7005)

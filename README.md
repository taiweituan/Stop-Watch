## React onClick Event ##
* `<button onClick={this.handleStop}>Stop</button>`
* onCLick can take `{this.functionName}` when `this` is declared inside the `Constructor()`
* Otherwise, it can be called using callback arrow function `() => this.functionName()`

##Set Interval##
* `setInterval()` takes a function and an integer(ms)
* `clearInterval()` will remove the interval timer, which pauses the timer in this case
* Make sure to assign `setInterval()` as a variable and make sure you can access it, so you are able to start the `setInterval(var)` and `clearInterval(var)`.
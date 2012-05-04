var express = require('express')
    app = express.createServer()

/*
 * Configuration
 */
app.configure(function() {
    app.use(express.static(__dirname + '/public'))
    app.use(express.bodyParser())
    app.use(express.methodOverride())
})

app.configure('development', function() {
    app.use(express.logger())
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }))
})


app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(process.env.PORT || 1982)

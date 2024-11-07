import app from "./app"
import "./Database/connection"

app.listen(app.get('port'))

console.log('server on port', app.get('port'))
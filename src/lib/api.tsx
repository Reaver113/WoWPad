const next = require('next')
const app = next()

require('./auth')

app.get('/', (req: any, res: any) => {
	res.send('<a href="google.com">LOG IN</a>')
})
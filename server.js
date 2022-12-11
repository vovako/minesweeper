import express from "express"
import path from "path"

const app = express()
const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()
app.use(express.static(path.resolve(__dirname, "public")))

app.get('/', (req, res) => {
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
}) 
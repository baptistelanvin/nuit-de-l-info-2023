import express from 'express'

const app = express()
const port = 80

app.use(express.static('public'))
app.use(express.json())
app.use("/images", express.static('images'))
app.use("/sons", express.static('sons'))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

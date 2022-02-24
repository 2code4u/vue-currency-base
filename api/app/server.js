import express from "express"
import path, {dirname} from "path"
import router from "./router.js"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PORT = process.env.PORT || 4000
const DIR_PATH = path.join(__dirname, "../../dist/")

const app = express()

app.use(express.json())
app.use('/api', router)

app.use(express.static(DIR_PATH))



async function startApp () {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on the port::${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }

}

startApp()

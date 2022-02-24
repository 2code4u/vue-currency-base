import Router from "express"
import MainController from "./MainController.js"

const router = new Router()

router.get('/test', (req, res) => {
    res.sendStatus(418)
  })

router.get('/currency', MainController.currency)

export default router

import request from "request"

class MainController {
    async currency (req, res) {
      try {
        request(`https://www.cbr-xml-daily.ru/daily_json.js`,
          (err, result, body) => {
            if (err) {
              return res.status(500).send({message: err})
            }
            res.send(body)
          })
      } catch (error) {
        
      }
    }

}

export default new MainController()

import QRCode from "qrcode";
import express from "express";
import bodyParser from 'body-parser';


const app: express.Express = express();
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("Rockhopper-Penguin");
});

let text: {text: string};

app.post("/", (req) => {
  text = req.body;
  console.log(`text -> ${JSON.stringify(text)}`);
  getQr(text.text)
})

const getQr = (text: string) => {
  QRCode.toFile("output.png", text);
}

app.listen(3000);
console.log(`Server runnning -> http://127.0.0.1:3000`);
export default app;

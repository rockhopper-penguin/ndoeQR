// import QRCode from "qrcode";
import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("Rockhopper-Penguin");
});

// QRCode.toFile("test.png", "Rockhopper-Penguin!!!");

app.listen(3000);
console.log(`Server runnning -> http://127.0.0.1:3000`);
export default app;

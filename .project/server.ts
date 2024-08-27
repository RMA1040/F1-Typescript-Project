import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req,res) => {
    res.type("text/html");
    res.status(404);
    res.send("Server not found")
})

app.use(express.static("public"));

app.listen(app.get("port"), ()=> {
    console.log("[server] http://localhost" + app.get("port"))
});
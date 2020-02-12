const express = require("express");


const app = express();

const questionsController = require("./controllers/questions");

const cors = require("cors");


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 




app.use("/shirts", shirtsController);
app.use('/pants', pantsController);
app.use('/jackets', jacketsController);
app.use('/outfits', outfitsController);


app.listen(7000, () => console.log("Listening on port 7000"));
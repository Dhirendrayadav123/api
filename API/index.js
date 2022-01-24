const expess=require('express');
const mongoose=require('mongoose');
const app=expess();
const Addroute=require("./routes/route");

const PORT=5000;

const URL='mongodb+srv://Dhirendrayadav:9149292769@cluster0.2xepu.mongodb.net/Cluster0?retryWrites=true&w=majority';

app.use(expess.json());
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

app.use("./api/add",Addroute);

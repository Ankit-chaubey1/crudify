const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const PORT=process.env.PORT || 5000;

const notesroutes=require('./routes/NoteRoute.js');
const app=express();
app.use(express.json());

dotenv.config();

app.use('/api/notes',notesroutes);

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error(err));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
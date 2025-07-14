const Note=require('../models/Note');


///create
const createNote=async(req,res)=>{
    try{
        const note=new Note(req.body);
        await note.save();
        res.status(201).json(note);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}


//read  all
const readNote=async(req,res)=>
{
    try{
        const note=await Note.find();
        if(!note){
            return res.status(404).json({message:'Note not found'});
        }
        res.json(note);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//readby id
const readNotebyid=async(req,res)=>
{
    try{
        const note=await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message:'Note not found'});
        }
        res.json(note);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//update
const updateNote=async (req,res)=>{
    try{
        const note=await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!note){
            return res.status(404).json({message:'Note not found'});
        }
        res.json(note);
    }catch(error){
        res.status(400).json({error:error.message});
    
}
}

//delete
const deleteNote=async(req,res)=>{
    try{

        const note=await Note.findByIdAndDelete(req.params.id);
    if(!note){
        return res.status(404).json({message:'Note not found'});
    }
    res.json(note);
}catch(error){
    res.status(500).json({error:error.message});
}
}

module.exports={createNote,readNote,readNotebyid,updateNote,deleteNote};
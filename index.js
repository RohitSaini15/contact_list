const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose')
const Contact=require('./models/contact')

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// let contactList=[
//     {
//         name:"Jigyasa",
//         phone:11111111111
//     },
//     {
//         name:"Rohit",
//         phone:555555555
//     },{
//         name:"Shivam",
//         phone:777777777
//     }
// ]


app.get('/',async (req,res)=>{
    // res.render('home',{contact_list:contactList})
    try{
        let contactList=await Contact.find();
        res.render('home',{contact_list:contactList});
    }catch(err){
        console.log('Error occured in fetching documents ')
        res.send('<h1>Error occured in fetching documnets</h1>');
    }
})

app.get('/practice',(req,res)=>{
    res.send("<h1>You enter into the practice mode</h1>")
})

app.get('/delete-contact/',async (req,res)=>{
    // let deleteId=contactList.findIndex((contact)=>contact.phone == req.query.phone);

    // if(deleteId!=-1){
    //     contactList.splice(deleteId,1);
    // }

    try{
        await Contact.findByIdAndDelete(req.query.id);
    } catch(err){
        console.log(err);
    }

    res.redirect('back');
})

app.post('/addContact',async (req,res)=>{
    // if(req.body){
    //     contactList.push(req.body);
    // }
    // res.redirect('back');

    const contact1=new Contact({
        name:req.body.name,
        phone:req.body.phone
    })

    try{
        await contact1.save();
        console.log("succesfuly saved");
    }catch(err){
        console.log(err);
    }

    res.redirect('back');
})

app.listen(port,function(err){
    if(err) console.log("Error occured while server strating");
    else console.log("Server is opened at port ",port);
})
import { Alert, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState,useRef } from "react";

export const Contacts = () => {
    
    const [name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[subject, setSubject]= useState("")
    const[message, setMessage]= useState("")
    const[msg, setMsg] = useState("")
    const[data, setData] = useState([])

    const getData = async() => {
        const result =  await axios.get("http://localhost:2023/getdata");
        setData(result.data)
    }

    useEffect(()=>{
        getData()
    },[])

    const inputRef=useRef()
    const emailRef=useRef()
    const subRef=useRef()
    const msgRef=useRef()

    const handleSubmit=async(e)=>{
        const payload = {name, email, subject, message}
        await axios.post("http://localhost:2023/adddata",payload)
        setName("")
        setEmail("")
        setSubject("");
        setMessage("")
        getData()
        alert(`You have submitted`)
    }

    const handlecheck=()=>{
        inputRef.current.focus()
    }
    const handleEmail=()=>{
        emailRef.current.focus()
    }
    const handleSub=()=>{
        subRef.current.focus()
    }
    const handleMsg=()=>{
        msgRef.current.focus()
    }

    return(
        <form>
        <Grid container spacing={2} sx={{bgcolor:"black", padding:10}} >
            <Grid item xs={2}>
                <img src="./images/gmail.jpg" style={{borderRadius:"100%"}} height={120} width={120} alt="" />
            </Grid>
            <Grid item xs={6}>
                <p style={{color:"grey", fontSize:25}}>Get in touch with me</p>
            </Grid>
            <Grid item xs={4}>
               
            </Grid>
            
            <Grid item xs={2} sx={{color:"white", fontSize:20}}>
               <label onClick={handlecheck} >Name*</label>     
            </Grid>
            <Grid item xs={6}>
                <input style={{width:570, backgroundColor:"black", height:50, color:"white"}}  ref={inputRef} required type="text" value={name} onChange={e => setName(e.target.value)} fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
            <Grid item xs={4}>
                <p style={{color:"white", fontSize:20, marginTop:"-5px",marginLeft:65}}>Address and Phone</p>
                <p style={{color:"grey", marginTop:"-10px",marginLeft:65}}>Mayuri Achewad</p>
                <p style={{color:"grey", marginTop:"-10px",marginLeft:65}}>mayuriachewad@gmail.com</p>

            </Grid>
            <Grid item xs={2} sx={{color:"white", fontSize:20}}>
                <label onClick={handleEmail} htmlFor="">Email*</label>      
            </Grid>
            <Grid item xs={6} sx={{marginTop:"-20px"}} >
                <input ref={emailRef} style={{width:570, backgroundColor:"black", height:50, color:"white"}} required type="email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
            
            <Grid item xs={4}>
            <p style={{color:"grey", marginTop:"-15px",marginLeft:65}}>Nanded</p>
            <p style={{color:"grey", marginTop:"-10px",marginLeft:65}}>Maharashtra, 431602</p> 
            <p style={{color:"grey", marginTop:"-10px",marginLeft:65}}>+91 9699813523</p> 

            </Grid>
            <Grid item xs={2} sx={{color:"white", fontSize:20}}>
                <label onClick={handleSub} htmlFor="">Subject </label>     
            </Grid>
            <Grid item xs={6} sx={{marginTop:"-20px"}}>
                <input ref={subRef} style={{width:570, backgroundColor:"black", height:50, color:"white"}} required type="text" value={subject} onChange={e => setSubject(e.target.value)} fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
            
            <Grid item xs={4}></Grid>
            <Grid item xs={2} sx={{color:"white", fontSize:20, marginTop:4}}>
                <label onClick={handleMsg} htmlFor="">Message* </label>    
            </Grid>
            <Grid item xs={6} sx={{marginTop:3}}>                
                <input ref={msgRef} style={{width:570, backgroundColor:"black", height:50, color:"white"}} required type="text" value={message} onChange={e => setMessage(e.target.value)}  fullWidth sx={{bgcolor:"#524e45",}}/>
            </Grid>

            <Grid item xs={4}></Grid>   
            <Grid item xs={2}></Grid>   
            <Grid item xs={6} sx={{marginTop:3}}>
                <Button onClick={handleSubmit}  sx={{color:"white", fontSize:20, bgcolor:"#404040",padding:2, width:200}}>
                    Submit
                </Button>
            </Grid> 

            {/* <Grid item xs={12}>
                <span style={{color:"red"}}>  
                    {msg !== "" && alert("succefully added")}
</span>
            </Grid> */}
            
        </Grid>
        </form>
    )
}
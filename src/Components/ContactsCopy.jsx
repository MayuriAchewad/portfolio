import { Alert, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState,useRef } from "react";

export const ContactsCopy = () => {
    
    const [name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[subject, setSubject]= useState("")
    const[message, setMessage]= useState("")
    const[msg, setMsg] = useState("")
    const[data, setData] = useState([])

    // const getData = async() => {
    //     const result =  await axios.get("http://localhost:2023/getdata");
    //     setData(result.data)
    // }

    // useEffect(()=>{
    //     getData()
    // },[])

    const inputRef=useRef()
    const emailRef=useRef()
    const subRef=useRef()
    const msgRef=useRef()

    const handleSubmit=async(e)=>{
        const payload = {name, email, subject, message}
       
        setName("")
        setEmail("")
        setSubject("");
        setMessage("")
        // getData()
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
        <Grid container spacing={2} sx={{bgcolor:"black", padding:{xs:3, sm:4, md: 6 , lg: 8, xl: 10}}} >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {/* <h1 align="center" style={{color:"white", fontSize:55}}>Contact</h1> */}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <img src="./images/gmail.jpg" style={{borderRadius:"100%",opacity:0.5}} height={100} width={100} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <p style={{color:"grey", fontSize:25, marginTop:25}}>Get in touch with me</p>
            </Grid>

            
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8} >
            <Grid container spacing={2} >

            
            
            <Grid item xs={12} sm={12} md={12} lg={2} xl={2} sx={{color:"white", fontSize:20}}>
               <label onClick={handlecheck} >Name*</label>     
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={10} xl={10}>
                <input  ref={inputRef} required type="text" value={name} onChange={e => setName(e.target.value)} fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
           
            <Grid item  xs={12} sm={12} md={12} lg={2} xl={2} sx={{color:"white", fontSize:20}}>
                <label onClick={handleEmail} htmlFor="">Email*</label>      
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={10} xl={10} >
                <input ref={emailRef} required type="email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
            
            
            <Grid item  xs={12} sm={12} md={12} lg={2} xl={2} sx={{color:"white", fontSize:20}}>
                <label onClick={handleSub} htmlFor="">Subject </label>     
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={10} xl={10}>
                <input ref={subRef} required type="text" value={subject} onChange={e => setSubject(e.target.value)} fullWidth sx={{bgcolor:"#524e45"}}/>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={2} xl={2} sx={{color:"white", fontSize:20, marginTop:4}}>
                <label onClick={handleMsg} htmlFor="">Message* </label>    
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={10} xl={10} sx={{marginTop:3}}>                
                <input ref={msgRef} required type="text" value={message} onChange={e => setMessage(e.target.value)}  fullWidth sx={{bgcolor:"#524e45",}}/>
            </Grid>  
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:3}}>
                <Button onClick={handleSubmit}  sx={{color:"white", fontSize:20, bgcolor:"#404040",padding:2, width:200}}>
                    Submit
                </Button>
            </Grid> 
            </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Grid container spacing={2} className="cnt">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <h2 >Address and phone</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <p >Mayuri Achewad</p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <p >mayuriachewad@gmail.com</p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p >Nanded</p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p >Maharashtra, 431602</p> 
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p >+91 9699813523</p> 
            </Grid>

            
            </Grid>
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
import { useEffect } from "react";
import './components.css'
import React from "react";
import { useState } from "react"
import appLog from '../assets/images/graphQl.png'
import Rotating from "./Rotating";
import better from '../assets/images/BETTER.png'
import JsVoyager from "./JsVoyager";
import { Link } from "react-router-dom";


const onMouseOut = (e) => e.currentTarget.style.transform = 'scale(1.0)'
const onMouseOver = (e) => e.currentTarget.style.transform = 'scale(1.1)'
export  default function Home(){
    const [url, seturl] = useState('')
    const [showSub,setSub] = useState(true)
    const [result, setResult] = useState([]);
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [start,setStart] = useState(false)

    useEffect(() => {
        if (error) {
          // Set a timeout to clear the error after 5 seconds
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      }, [error]);

    const isValidUrl = (url) => {
        try {
            new URL(url)
            return true
        }
        catch (error){
            return false
        }
    }
    let UrL ='http://127.0.0.1/api/'
    // const fetchData = async () =>{
    //     try{
    //         setLoading(true)
    //         const response = await fetch(`${UrL}${url}`)
    //         const data = await response.json()
    //         console.log(data)
    //         setResult(data)
    //     }
    //     catch(error){
    //         console.error('Error fettchind data')
    //     }
    //     finally{
    //         setLoading(false);
    //     }
    // };
    // function async() fetchData(){

    // }
    const fetchData = async () => {
        setResult('')
        setSub(false)
        try {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            };
            console.log("sending data")
            const response = await fetch(UrL, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Correctly parse the response as JSON
            setResult(data);
            console.log("data",result)
            console.log(data.error);
        } catch (error) {
            console.error('could not query', error.message);
        } finally {
            setLoading(false);
        }
    };
    
    
    // useEffect(() => {
        
    //     if (isValidUrl(url)){
    //         setError('')
    //         fetchData()
    //     }
    //     else{
    //         setError('Invalid Url.')
    //     }
    // },[url]
    // )
    // function handleSubmit(e){
    //     if (e ='d'){
    //         UrL = "http://127.0.0.1:8000/api/"

    //     }
    //     else if (e ='i'){
    //         UrL = "http://127.0.0.1:8000/api/testInfd/"
            
    //     }
    //     else if (e ='c'){
    //         UrL = "http://127.0.0.1:8000/api/testcsrf/"
            
    //     }
    //    else (e ='g')
    //    console.log(url)
    //    if (isValidUrl(url)){
    //        setError('')
    //        fetchData();
    //        setStart(true)

    //    }
    //    else {
    //        setError('INvalid URL. Please enter valid URL.')
    //    }
    // }
    const ViewVoyager = () => {
        // <JsVoyager url/>
    }
    const csrf = () =>{
        UrL ='http://127.0.0.1:8000/api/testcsrf/'
        console.log(url)
        if (isValidUrl(url)){
            setError('')
            fetchData();
            setStart(true)
 
        }
        else {
            setError('Invalid URL. Please enter valid URL.')
        }
    }
    const ddos = () =>{
        UrL ='http://127.0.0.1:8000/api/testDDOS/'
        console.log(url)
        if (isValidUrl(url)){
            setError('')
            fetchData();
            setStart(true)
 
        }
        else {
            setError('INvalid URL. Please enter valid URL.')
        }
    }
    const info = () =>{
        UrL ='http://127.0.0.1:8000/api/testInfd/'
        console.log(url)
        if (isValidUrl(url)){
            setError('')
            fetchData();
            setStart(true)
 
        }
        else {
            setError('Invalid URL. Please enter valid URL.')
        }
    }
    const general = () =>{
        UrL ='http://127.0.0.1:8000/api/'
        console.log(url)
        if (isValidUrl(url)){
            setError('')
            fetchData();
            setStart(true)
 
        }
        else {
            setError('Invalid URL. Please enter valid URL.')
        }
    }

    const handleSubmit = () => {
        console.log(url)
        if (isValidUrl(url)){
            // setError('')
            // fetchData();
            setStart(true)
            console.log(start)
        }
        else {
            setError('Invalid URL. Please enter valid URL.')
        }
    }
    
    

    return (
        <div style={{ display: 'flex', height:"100%"}}>
             <div className="inputDiv" 
             style={{flex:1,height:'100%', 
             padding: '20px',textAlign:"center",alignContent:"center",fill:'transparent'}}> 
             
             <div className="inputDiv">
                <input
                className="inputField"
                type="text"
                value={url}
                onChange={(e) => seturl(e.target.value)}
                placeholder="Enter a valid URL"
               
                />
                <br/>{ showSub ? 
                <button onClick={handleSubmit}
                className='queryButton' 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>Submit</button> : <div></div>}
                
                {error && <div style={{color:'red'}}>{error}</div>}
                </div>
                { start ?
                (
                    <div style={{ display: 'flex',margin: '10px',justifyContent: 'center' }}>
                        <div style={{ flexDirection: 'column',padding:'20px',
                        justifyContent: 'center', alignContent: 
                        'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', border: '2px solid black', borderRadius: '10px'  }}>
                                <p><button className='queryButton' onClick={general} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Perform a quick General test</button></p>
                                {/* <p><button className='queryButton' onClick={csrf} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Perform an Injection test</button></p> */}
                                <p><button  className='queryButton' onClick={csrf} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for CSRF</button></p>
                                <p><button className='queryButton'  onClick={info} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for information disclosure</button></p>
                                <p><button  className='queryButton' onClick={ddos} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for DDOS</button></p>
                            </div>

                        </div>

                ):
                (
                    <div className='imageContainer' > 
                     <img className='apiImage' src={better} ></img>
                    </div>
                )
                }
                
            </div>
            <div style={{flex: 1,padding:'20px',overflowY:'auto'}}>
                { loading ? (
                    < Rotating/>
                ):
                (
                    // result.map((results) =>(
                    //     <div key={result.id}>
                    //         {results.resultx}
                    //         </div>
                    // ))
                    <div className="results">
                {result && result.resultx && result.resultx.split(' ').map((word, index) => (
                            <span
                                key={index}
                                style={{
                                    color:
                                        word.toLowerCase() === 'high' ? 'red' :
                                            word.toLowerCase() === 'medium' ? 'green' :
                                                word.toLowerCase() === 'low' ? 'yellow' :
                                                    'inherit'
                                }}
                            >
                                {word}{' '}
                    </span>
                ))}
                {/* // Inside the return statement, after the condition for rendering result: */}
                {/* {result && result.resultx && /\bintrospection\b/i.test(result.resultx) && (
                    <Link to={`/js-voyager?url=${encodeURIComponent(url)}`} className="queryButton">View Voyager</Link>
                )} */}

                </div>
                   )
                }
                
            </div>
        </div>
     
    
    )



}
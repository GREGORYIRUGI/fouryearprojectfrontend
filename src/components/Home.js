import { useEffect } from "react";
import './components.css'
import React from "react";
import { useState } from "react"
import appLog from '../assets/images/graphQl.png'
import Rotating from "./Rotating";
import better from '../assets/images/BETTER.png'


const onMouseOut = (e) => e.currentTarget.style.transform = 'scale(1.0)'
const onMouseOver = (e) => e.currentTarget.style.transform = 'scale(1.1)'
export  default function Home(){
    const [searchTerm, setSearchTerm] = useState('')
    const [result, setResult] = useState([]);
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [start,setStart] = useState(false)

    const isValidUrl = (url) => {
        try {
            new URL(url)
            return true
        }
        catch (error){
            return false
        }
    }
    const UrL ='http://127.0.0.1:8000/api/?query='
    const fetchData = async () =>{
        try{
            setLoading(true)
            const response = await fetch(`${UrL}${searchTerm}`)
            const data = await response.json()
            console.log(data)
            setResult(data)
        }
        catch(error){
            console.error('Error fettchind data')
        }
        finally{
            setLoading(false);
        }
    };
    // useEffect(() => {
        
    //     if (isValidUrl(searchTerm)){
    //         setError('')
    //         fetchData()
    //     }
    //     else{
    //         setError('Invalid Url.')
    //     }
    // },[searchTerm]
    // )

    const handleSubmit = () => {
        console.log(searchTerm)
        if (isValidUrl(searchTerm)){
            setError('')
            fetchData();
            setStart(true)

        }
        else {
            setError('INvalid URL. Please enter valid URL.')
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter a valid URL"
               
                />
                <br/>
                <button onClick={handleSubmit}
                className='queryButton' 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}>Submit</button>
                {error && <div style={{color:'red'}}>{error}</div>}
                </div>
                { start ?
                (
                    <div style={{ display: 'flex',margin: '10px',justifyContent: 'center' }}>
                        <div style={{ flexDirection: 'column',padding:'20px',
                        justifyContent: 'center', alignContent: 
                        'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', border: '2px solid black', borderRadius: '10px'  }}>
                                <p><button className='queryButton' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Perform a quick General test</button></p>
                                <p><button className='queryButton' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Perform an Injection test</button></p>
                                <p><button  className='queryButton' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for CSRF</button></p>
                                <p><button className='queryButton'  onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for information disclosure</button></p>
                                <p><button  className='queryButton' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Test for DDOS</button></p>
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
                    <div>
                       { result['resultx']}
                    </div>
                )
                }
            </div>
        </div>
    )



}
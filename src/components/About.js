import GraphComponent from "./GraphComponent"

export default function About(){
    console.log("about")
    const qM ='{'
    const qB ='}'
    const cF = '('
    const cB = '0'
    const queryDisplay =`query about \n ${qM}`
    const query = `aboutApp ${cF} isResearcher : true ${cB} ${qM}\n`
    const fieldName = `info \n`
    const fieldName2 =`creator \n`
    const queryD1 =`${qB}\n`
    const queryd = `${qB}`
    const creator = <p>'Created by: Gregory Irugi'</p>
    const appInfo = <p>" hello thank you for taking time to view my. This is a graphql testing application designed to help security reseacher get quickly started by being able to catch low hanging fruits of vulnerabilities in their app"</p>
    const creatorNote = <p>"The app is created by Gregory Irugi. He is a Cyber security researcher dedicated to breaking and defending API's."</p> 
    return (
        <div style={{height: '100vh'}}>
        <div style={{display: 'flex',flexDirection: 'column-reverse', height: '50%',color: 'ButtonShadow',backgroundColor: "revert-layer"}}>
           < GraphComponent />
        </div>
        
        <div style={{paddingLeft: '50 px',paddingBlock:'30px',
        color: 'ButtonHighlight',display: '-ms-inline-flexbox',flexDirection: 'column-reverse',
        alignItems:'center',backgroundColor:'darkslateblue',padding: '50px'}}>
            <div>
           {appInfo}
            {creatorNote}
            {creator}
            </div>
        </div>
        </div>

    );
}
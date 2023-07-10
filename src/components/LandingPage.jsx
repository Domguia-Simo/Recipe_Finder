import React from 'react'
import Head from './Head/head'
import Body from './Body/body'
import Foot from './Foot/foot'

function LandingPage(){
    return(
        <React.Fragment>
            <Head/>
            <Body/>
            <Foot/>
        </React.Fragment>
    )
}

export default LandingPage
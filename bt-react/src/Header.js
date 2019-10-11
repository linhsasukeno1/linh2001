import React from 'react';
class Header extends React.Component
{ render()
    { var style={
        backgroundColor:"grey",
        height:"100px",
         textAlign:"center",
         }
        return(
            <div style={style}> 
                <img src={require('./icon.png')} alt="Beautifull" width="5%"/>
                <h1 style={{marginRight:10,display:"inline-block",fontSize:"50px"}}>React Clicker</h1>
              
                 
            </div>
        )
    }

}
export default Header;
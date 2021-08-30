import React from 'react'
import magicbear from './magicbear.png'
const NavBarMint = () => {
    return (
        <div>
            
            <h1 id="title"><img src={magicbear} alt="" width="45" height="45"></img> Romulon NFT Minter</h1>
            <p>
                Simply add your asset's link, name, and description, then press "Mint."
            </p>
        </div>
    )
}

export default NavBarMint

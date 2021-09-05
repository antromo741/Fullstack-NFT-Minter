import { useEffect, useState } from "react";
import NavBarMint from "./NavBarMint.js"
import { connectWallet } from "./utils/interact.js";

const Minter = (props) => {

    //State variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setURL] = useState("");

    useEffect(async () => { //TODO: implement

    }, []);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    const onMintPressed = async () => { //TODO: implement

    };

    return (
        <div className="Minter">
            <button id="walletButton" onClick={connectWalletPressed}>
                {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                ) : (
                    <span>Connect Wallet</span>
                )}
            </button>

            <br></br>
            <NavBarMint />
            <form>
                <h2>🖼 Link to asset: </h2>
                <input
                    type="text"
                    placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                    onChange={(event) => setURL(event.target.value)}
                />
                <h2>🤔 Name: </h2>
                <input
                    type="text"
                    placeholder="e.g. My first NFT!"
                    onChange={(event) => setName(event.target.value)}
                />
                <h2>✍️ Description: </h2>
                <input
                    type="text"
                    placeholder="e.g. Even cooler than cryptokitties ;)"
                    onChange={(event) => setDescription(event.target.value)}
                />
            </form>
            <button id="mintButton" onClick={onMintPressed}>
                Mint NFT
            </button>
            <p id="status">
                {status}
            </p>
        </div>
    );
};

export default Minter;
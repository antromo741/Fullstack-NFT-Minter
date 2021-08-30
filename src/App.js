
import Minter from './Minter'
import pixelb2 from './pixelb2.png'

function App() {
    return (
        <div style={{
            backgroundImage: `url(${pixelb2})`, backgroundPosition: 'center', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}  className="App">
            <Minter></Minter>
        </div>
    );
}

export default App;
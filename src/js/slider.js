import Carousel from 'nuka-carousel';
import Header from "./header";

function Karuzela() {
    const path1 = require('../assets/slide1.jpg');
    const path2 = require('../assets/slide2.jpg');
    const path3 = require('../assets/slide3.jpg');
    const container = document.getElementById('app');
    const headerInnerWidth = container.header.innerWidth
    console.log(headerInnerWidth);
    const styleImg = {
        width: '100%',
        height: `calc(100vh - ${headerInnerWidth}px)`,
        imageCover: 'cover'
    }

    return (
        <Carousel

        >
            <img style={styleImg} src={path1} />
            <img style={styleImg} src={path2}/>
            <img style={styleImg} src={path3} />
        </Carousel>
    )
}
export default Karuzela;
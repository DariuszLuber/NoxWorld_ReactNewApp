import Carousel from 'nuka-carousel';
import Header from "./header";


function Karuzela() {
    const images = [
        {
            path: require('../assets/slide1.jpg'),
            height: '200px'
        },
        {
            path: require('../assets/slide2.jpg'),
            height: '300px'
        },
        {
            path: require('../assets/slide3.jpg'),
            height: '400px'
        },
    ]

    // you shouldn't use basic JS dom manipulation in React
    // const container = document.getElementById('app');
    // const headerInnerWidth = container.header.innerWidth
    // console.log(headerInnerWidth);
    
    const styleImg = {
        width: '100%',
        imageCover: 'cover'
    }

    
    return (
        <Carousel>
            {images.map((image, index) => <img key={index} style={{ ...styleImg, height: image.height }} src={path1} /> )}
        </Carousel>
    )
}
export default Karuzela;
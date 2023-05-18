import Header from "./Header";
import Banner from './image/banner.jpg';
const Home =()=>{
    return(
        <>
       <Header/>
       <div className="banner-image"> 
            <div className="banner-image">
                <img src={Banner} className="banner-img" alt="banner"/>
            </div>
      </div>
        </>
    )
}
export default Home;


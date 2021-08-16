import Header from "./Header";
import "../homeStyle.css";
import mobile from "./images/mobiles.jpg";
import headphone from "./images/headphones.jpg";
import laptop from "./images/laptops.jpg";
import watch from "./images/watches.jpg";

function Home(){
    
    return<>
        <Header/>
        <div className="home">

        </div>
        
        <div className="register">
            <h1>Signup to start shopping!</h1>
            <div className="details">
                <input type="text" placeholder="Enter your email"/>
                <button>Signup</button>
            </div>
                
            </div>
        <div>
            <h1 className="category">Shop by category</h1>
        </div>

        <div className="blocks">
            <div className="block">
                <div><img src={mobile} alt="img"/></div>
                 <div>
                    <div>
                        <h2>Mobile Phones</h2>
                        <p>A smartphone is an addictive device which traps a soul into a lifeless planet full of lives</p>
                        <p>If your plans don’t include mobile, your plans are not finished.</p>
                    </div>
                 </div>
            </div>
            <div className="line"></div>

            <div className="block">
                <div>
                    <div>
                        <h2>Laptops</h2>
                        <p>A smartphone is an addictive device which traps a soul into a lifeless planet full of lives</p>
                        <p>If your plans don’t include mobile, your plans are not finished.</p>
                    </div>
                </div>
                <div><img src={laptop} alt="img"/></div>
            </div>

            <div className="line"></div>

            <div className="block">
                <div><img src={headphone} alt="img"/></div>
                <div>
                    <div>
                        <h2>Headphones</h2>
                        <p>A smartphone is an addictive device which traps a soul into a lifeless planet full of lives</p>
                        <p>If your plans don’t include mobile, your plans are not finished.</p>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="block">
                <div>
                    <div>
                        <h2>Watches</h2>
                        <p>A smartphone is an addictive device which traps a soul into a lifeless planet full of lives</p>
                        <p>If your plans don’t include mobile, your plans are not finished.</p>
                    </div>
                </div>
                <div><img src={watch} alt="img"/></div>
            </div>
        
        
        </div>
        <div className="footer"></div>
    </>
}
export default Home;
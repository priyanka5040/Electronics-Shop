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
                <div className="homeBlockImg"><img src={mobile} alt="img"/></div>
                 <div>
                    <div>
                        <h2>Mobile Phones</h2>
                        <p>A smartphone traps a soul into a lifeless planet full of lives</p>
                        <p>If your plans don’t include mobile, your plans are not finished.</p>
                    </div>
                 </div>
            </div>
            <div className="line"></div>
            <div className="block">
                <div>
                    <div>
                        <h2>Laptops</h2>
                        <p>Protect and personalize your laptop with our premium, impoted vinyl based laptop skin.</p>
                        <p>Skinkart's product are made from stretch-resistant, premium vinyl material that come in a range of rich, vibrant colours and designs to suit all tastes. Our skins are guaranteed to extend the life of your gadgets body, by protecting it from scratches and the vagaries of wear and tear from rough handling in most conditions.</p>
                    </div>
                </div>
                <div className="homeBlockImg"><img src={laptop} alt="img"/></div>
            </div>
            <div className="line"></div>
            <div className="block">
                <div className="homeBlockImg"><img src={headphone} alt="img"/></div>
                <div>
                    <div>
                        <h2>Headphones</h2>
                        <p>I have a therapist. Her name is music.</p>
                        <p>You are one-third as productive in open-plan offices as in quiet rooms. I have a tip for you: if you work in spaces like that, carry headphones with you, with a soothing sound like birdsong. Put them on, and your productivity goes back up to triple what it would be.</p>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="block">
                <div>
                    <div>
                        <h2>Watches</h2>
                        <p>A gentleman’s choice of timepiece says as much about him as does his Saville Row suit.</p>
                        <p>Unlike diamonds, watches were practical. They were for people on the run, people with appointments to keep and schedules to meet.</p>
                    </div>
                </div>
                <div className="homeBlockImg"><img src={watch} alt="img"/></div>
            </div>
        </div>
        <div className="footer">
            <p style={{color:'white'}} >@coyright 2021  All rights reserved</p>
            <p style={{color:'white'}}>   </p>
        </div>
    </>
}
export default Home;
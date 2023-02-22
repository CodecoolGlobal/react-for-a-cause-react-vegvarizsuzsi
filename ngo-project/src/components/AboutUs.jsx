import "./AboutUs.css";
import '../App.css';
import AboutUsItem from './AboutUsItem';

function AboutUs() {
    return (
        <div className='aboutus'>
            <h1>ABOUT US</h1>
            <div className='aboutus__container'>
                <div className='aboutus__wrapper'>
                    <ul className='aboutus__items'>
                        <AboutUsItem
                            title='Solving Global Challenges'
                            text='70% of crops worldwide rely on bees, whose increasing mortality rate, coupled with colony collapse disorder, puts financial strain on farmers and beekeepers. This makes it harder to feed an exponentially growing global population.'

                        />
                        <AboutUsItem
                            title='Founded On Solid Ground'
                            text='Headquartered in California with research and development in Israel, our team of commercial beekeepers and food growers, engineers and entrepreneurs, and industry-renowned scientists work around the globe and around the clock to maximize every pollination cycle.'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

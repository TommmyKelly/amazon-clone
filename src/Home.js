import React from 'react';
import './Home.css';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
   
    return (
        <div className="home">
           <div classNmae="home__container">
              <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
              <div className="home__row">
                  <Product id="1" title='The lean startup' price={19.99} image="https://media.nisbets.com/asset/core/prodimage/largezoom/ct992_mixer1.jpg" rating={4} />
                  <Product id="2" title='The lean startup' price={29.99} image="https://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/w1200-h630-p-k-no-nu/ERIES_Enso_in_Blue_Master.png" rating={5} />
                   {/*  */}
              </div>
              <div className="home__row">
              <Product id="3" title='Laptop case' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/51jb6Xl+GOL._AC_US218_.jpg" rating={5} />
              <Product id="4" title='Professional USB Condenser Microphone' price={86.96} image="https://m.media-amazon.com/images/I/61qqu9krDkL._AC_UY218_.jpg" rating={5} />
              <Product id="5" title='The lean startup' price={9.99} image="https://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/w1200-h630-p-k-no-nu/ERIES_Enso_in_Blue_Master.png" rating={5} />
              </div>
              <div className="home__row">
              <Product id="6" title='Sony TV' price={200.00} image="https://hniesfp.imgix.net/8/images/detailed/211/All_TVs_Sony_KD43XH8196BU_12_m3b2-tp.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress" rating={5} />
              </div>
            </div> 
        </div>
    )
}

export default Home

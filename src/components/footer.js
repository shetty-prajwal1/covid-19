import React from 'react';
import styles from './footer.css'
 const Footer = ()=>{
     return(
         <div className='main-footer'>
             <div className='container '>
                 <div className = ' row'>
                    <div className='col'>
                        <h4 className='head'>               COVID-19 Tracker</h4>
                        <ul className='list-unstyled'>
                            <li><a href='https://www.who.int/'>WHO</a></li>
                            <li><a href='https://www.who.int/news-room/releases'>Latest News Updates</a></li>
                            <li><a href='https://www.today.com/health/covid-19-diet-nutrition-doctor-shares-advice-lower-coronavirus-risk-t180381'>DIET</a></li>
                        </ul>
                    </div>
                 </div>
             </div>
             <hr/>
             <div className='row'>
                 <p className='col-sm'>
                 &copy;{new Date().getFullYear()} SHETTY INC | All rights reserved | Terms of service | Privacy
                 </p>
             </div>

         </div>
     )
 }

 export default Footer;
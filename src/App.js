import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles  from  './App.module.css';
import {fetchData } from './api';//when an index file is present no need to mention that api/index it automatically goes for it.
import coronaImage from './images/corona3.png'
import Footer from './components/footer';
class App extends React.Component{
    state = {
        data:{},
        country : '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data : fetchedData });
    }

    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country});
    }

    render() {
        const{data,country} = this.state;
        return(
            <div className={styles.container}>
                <img  className={styles.image} src ={coronaImage} alt='COVID-19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange ={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Footer/>
            </div>
            
        )
        

    }
}


export default App;

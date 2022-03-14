import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("İstanbul");

   const handleChange = (e) => {
    setValue(e.target.value);
  }

  useEffect(()=> {
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=2073cec6584608efbf63cf481c6e06c7`)
    .then(res=>res.json())
    .then(data=>{
      setData(data);
      console.log(data);
      setLoading(false)
    })
  }, [value])
  if(!data) {
    return (
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden center">Loading...</span>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="main flex">
        <header className="App-header">
          <h2>Weekly Forecast in Turkey</h2>
          <select  className="form-select" aria-label="Default select example" name="Sehir"
          value={value} onChange={handleChange}
          >
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Adana">Adana</option>
            <option value="Adıyaman">Adıyaman</option>
            <option value="Afyonkarahisar">Afyonkarahisar</option>
            <option value="Ağrı">Ağrı</option>
            <option value="Aksaray">Aksaray</option>
            <option value="Amasya">Amasya</option>
            <option value="Antalya">Antalya</option>
            <option value="Ardahan">Ardahan</option>
            <option value="Artvin">Artvin</option>
            <option value="Aydın">Aydın</option>
            <option value="Balıkesir">Balıkesir</option>
            <option value="Bartın">Bartın</option>
            <option value="Batman">Batman</option>
            <option value="Bayburt">Bayburt</option>
            <option value="Bilecik">Bilecik</option>
            <option value="Bingöl">Bingöl</option>
            <option value="Bitlis">Bitlis</option>
            <option value="Bolu">Bolu</option>
            <option value="Burdur">Burdur</option>
            <option value="Bursa">Bursa</option>
            <option value="Çanakkale">Çanakkale</option>
            <option value="Çankırı">Çankırı</option>
            <option value="Çorum">Çorum</option>
            <option value="Denizli">Denizli</option>
            <option value="Diyarbakır">Diyarbakır</option>
            <option value="Düzce">Düzce</option>
            <option value="Edirne">Edirne</option>
            <option value="Elazığ">Elazığ</option>
            <option value="Erzincan">Erzincan</option>
            <option value="Erzurum">Erzurum</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Gaziantep">Gaziantep</option>
            <option value="Giresun">Giresun</option>
            <option value="Gümüşhane">Gümüşhane</option>
            <option value="Hakkâri">Hakkâri</option>
            <option value="Hatay">Hatay</option>
            <option value="Iğdır">Iğdır</option>
            <option value="Isparta">Isparta</option>
            <option value="Kahramanmaraş">Kahramanmaraş</option>
            <option value="Karabük">Karabük</option>
            <option value="Karaman">Karaman</option>
            <option value="Kars">Kars</option>
            <option value="Kastamonu">Kastamonu</option>
            <option value="Kayseri">Kayseri</option>
            <option value="Kırıkkale">Kırıkkale</option>
            <option value="Kırklareli">Kırklareli</option>
            <option value="Kırşehir">Kırşehir</option>
            <option value="Kilis">Kilis</option>
            <option value="Kocaeli">Kocaeli</option>
            <option value="Konya">Konya</option>
            <option value="Kütahya">Kütahya</option>
            <option value="Malatya">Malatya</option>
            <option value="Manisa">Manisa</option>
            <option value="Mardin">Mardin</option>
            <option value="Mersin">Mersin</option>
            <option value="Muğla">Muğla</option>
            <option value="Muş">Muş</option>
            <option value="Nevşehir">Nevşehir</option>
            <option value="Niğde">Niğde</option>
            <option value="Ordu">Ordu</option>
            <option value="Osmaniye">Osmaniye</option>
            <option value="Rize">Rize</option>
            <option value="Sakarya">Sakarya</option>
            <option value="Samsun">Samsun</option>
            <option value="Siirt">Siirt</option>
            <option value="Sinop">Sinop</option>
            <option value="Sivas">Sivas</option>
            <option value="Şırnak">Şırnak</option>
            <option value="Tekirdağ">Tekirdağ</option>
            <option value="Tokat">Tokat</option>
            <option value="Trabzon">Trabzon</option>
            <option value="Tunceli">Tunceli</option>
            <option value="Şanlıurfa">Şanlıurfa</option>
            <option value="Uşak">Uşak</option>
            <option value="Van">Van</option>
            <option value="Yalova">Yalova</option>
            <option value="Yozgat">Yozgat</option>
            <option value="Zonguldak">Zonguldak</option>
          </select>
        </header>
      </div>
      <h5 className="city-name">{value}</h5>
      {loading && <div class="spinner-border text-info" role="status">
        <span class="visually-hidden center">Loading...</span>
      </div> }
      <div className="bottom-part main flex">
        <div className="forecasts flex">
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Mon</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[0].main.temp_min}°C</p>
                <p className=''>{data.list[0].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[0].dt_txt}</i>
            </div>
          </div>
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Tue</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`}className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[8].main.temp_min}°C</p>
                <p className=''>{data.list[8].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[8].dt_txt}</i>
            </div>
          </div>
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Wed</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`} className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[16].main.temp_min}°C</p>
                <p className=''>{data.list[16].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[16].dt_txt}</i>
            </div>
          </div>
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Thu</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`} className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[24].main.temp_min}°C</p>
                <p className=''>{data.list[24].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[24].dt_txt}</i>
            </div>
          </div>
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Fri</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`} className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[32].main.temp_min}°C</p>
                <p className=''>{data.list[32].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[32].dt_txt}</i>
            </div>
          </div>
          <div className="card" style={{width: "12rem"}}>
            <div className="card-body">
              <p className="card-title">Sat</p>
              <img src={`http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`} className="card-img-top" alt="..."/>
              <div className="flex center">
                <p className="card-text">{data.list[39].main.temp_max}°C</p>
                <p className=''>{data.list[39].main.temp_max}°C</p>
              </div>
              <i style={{fontSize:"12px"}}>{data.list[39].dt_txt}</i>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;
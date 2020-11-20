import React, { useEffect, useState } from 'react';
import { Kaynaklar } from './data';

function Kaynak(props) {
    const [kaynak, setkaynak] = useState([]);

    const [kategorim, setkategorim] = useState("a");
     
    useEffect(() => {
        
       let yenikaynak = Kaynaklar.filter(kynk => kynk.kategori === kategorim);
       setkaynak(yenikaynak);
       if(kategorim === "") {
       setkaynak(Kaynaklar);
    }
    },
    [kategorim]
    );
    
    

    return (
        <>
            <div className='buttons'>
                <button className={kategorim === "" ? "royal kategoriler" : " kategoriler"} onClick={() => {
                    setkategorim("");
                }}>Hepsi</button>
                <button className={kategorim === "kodlayarak öğren" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("kodlayarak öğren");
                }}>Kodlayarak öğren</button>
                <button className={kategorim === "bilgini sına" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("bilgini sına");
                }}>Bilgini sına </button>
                <button className={kategorim === "dökümantasyon" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("dökümantasyon");
                }}>Dökümantasyon </button>
            </div>
            
            <div className="flex">
                <ul className="kaynaksıralama">
                {kaynak.map(kynk => {
                    return (<><li className="sıralama" key={kynk.id}><h3  className="hey">{kynk.konular.join(" - ")} -&gt; {kynk.kaynakismi}</h3> 
                    <p>( {kynk.kategori} )</p></li>
                    
                    </>)
                })}
                
                </ul>
            </div>
        </>

    );
}

export default Kaynak;
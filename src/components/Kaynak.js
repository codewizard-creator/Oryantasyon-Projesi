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
                <button className={kategorim === "yaparaköğren" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("yaparaköğren");
                }}>Yaparak öğren</button>
                <button className={kategorim === "bilgini sına" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("bilgini sına");
                }}>Bilgini sına </button>
                <button className={kategorim === "dökümantasyon" ? "royal kategoriler " : "kategoriler"} onClick={() => {
                    setkategorim("dökümantasyon");
                }}>Dökümantasyon </button>
            </div>
            
            <div className="flex">
                <ul>
                {kaynak.map(kynk => {
                    return (<><h3 key={kynk.id} className="hey">{kynk.konular.join(" - ")} -&gt; {kynk.kaynakismi}</h3> 
                    <p>( {kynk.kategori} )</p>
                    
                    </>)
                })}
                
                </ul>
            </div>
        </>

    );
}

export default Kaynak;
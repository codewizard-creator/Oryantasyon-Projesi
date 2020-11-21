
import React, { useState, useRef, useEffect } from 'react';
import { Kaynaklar } from './data';
import $ from 'jquery';


let toplam = 0;


export default function Program() {
    const [kaynak, setkaynak] = useState([]);
    const [hour, sethour] = useState(0);
    const [branchone, setbranchone] = useState("");
    const [branchtwo, setbranchtwo] = useState("");
    const [branchthree, setbranchthree] = useState("");
    const [etap, setetap] = useState(1);
    const count1 = useRef();
    const count2 = useRef();
    const count3 = useRef();
    const onChange = (value) => {

        if (value <= 6 && etap === 1) {
            count1.current.style.width = (value * 1) + "rem";



        }
        if (value <= 6 && etap === 2) {

            count2.current.style.width = (value * 1) + "rem";
        }
        if (value <= 6 && etap === 3)

            count3.current.style.width = (value * 1) + "rem";
        sethour(value);
        if (value > 6 || value < 0)
            sethour(0);
    }

    useEffect(() => {
        toplam = 0;
    }, [])

    useEffect(() => {
        if (branchone !== "" && etap === 2)
            toplam += parseInt(hour);
        if (branchtwo !== "" && etap === 3)
            toplam += parseInt(hour);
        sethour(0);
        if (branchthree !== "" && etap === 4)
            toplam += parseInt(hour);
        const ArrayA = [];
        const seçenekler = Kaynaklar.map((kaynaka) => {
            return kaynaka.konular.map(i => {
                if (i === branchone && etap === 2)
                    return kaynaka;
                if (i === branchtwo && etap === 3)
                    return kaynaka;
                if (i === branchthree && etap === 4)
                    return kaynaka;
            })
        }
        )
        for (let i = 0; i < seçenekler.length; i++) {
            for (let j = 0; j < seçenekler.length; j++) {
                if (seçenekler[i][j] != undefined) {
                    const element = seçenekler[i][j];
                    ArrayA.push(element);

                }
            }


        }
        setkaynak(ArrayA);
        if (branchone === "")
            count1.current.style.width = "0.2rem";
        if (branchtwo === "")
            count2.current.style.width = "0.2rem";
        if (branchthree === "")
            count3.current.style.width = "0.2rem";
    },
        [etap]
    )


    return (
        <div className="flex">

            <form>
                <input className="inputno" type="number" value={hour} onChange={e => onChange(e.target.value)} />

                <select id="secim" className="selection" placeholder="Seçiminiz" onChange={(e) => {

                    if (etap === 1) {

                        setbranchone(e.target.value);
                    }
                    else if (etap === 2) {

                        setbranchtwo(e.target.value);
                    } else if (etap === 3) {
                        setbranchthree(e.target.value);
                    }
                }}>
                    <option value="" selected></option>
                    <option value="JS">javascript</option>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="php">php</option>
                </select>

            </form>
            <div className="probar">

                <div style={{ width: "0.1rem", height: "100%", backgroundColor: "red", color: "white", fontSize: "1.1rem" }} ref={count1} className={branchone}>{branchone}</div>


                <div style={{ width: "0.1rem", height: "100%", backgroundColor: "orange", color: "white", fontSize: "1.1rem" }} ref={count2} className={branchtwo}>{branchtwo}</div>


                <div style={{ width: "0.1rem", height: "100%", backgroundColor: "blue", color: "white", fontSize: "1.1rem" }} ref={count3} className={branchthree}>{branchthree}</div>


            </div>
            <button className={etap === 4 && "hide"} onClick={() => {
                if (etap === 1 && hour > 0) {
                    branchone === "JS" && $("#secim option[value = 'JS']").remove();
                    branchone === "css" && $("#secim option[value = 'css']").remove();
                    branchone === "html" && $("#secim option[value = 'html']").remove();
                    branchone === "php" && $("#secim option[value = 'php']").remove();
                }
                if (etap === 2 && hour > 0) {
                    branchtwo === "JS" && $("#secim option[value = 'JS']").remove();
                    branchtwo === "css" && $("#secim option[value = 'css']").remove();
                    branchtwo === "html" && $("#secim option[value = 'html']").remove();
                    branchtwo === "php" && $("#secim option[value = 'php']").remove();

                }
                if (etap === 3 && hour > 0 && branchthree!=="") {
                    $("#secim option[value = 'css']").remove();
                    $("#secim option[value = 'JS']").remove();
                    $("#secim option[value = 'html']").remove();
                    $("#secim option[value = 'php']").remove();

                }

                    if (hour !== 0 && branchone !=="" && etap===1)
                    setetap(etap + 1);
                    if (hour !== 0 && branchtwo !=="" && etap===2)
                    setetap(etap + 1);
                    if (hour !== 0 && branchthree !=="" && etap===3)
                    setetap(etap + 1);

            }}>{etap <= 3 ? "sıradaki" : ""}</button>
            <span className="toplambilgi">toplam saat {toplam} </span>
            <ul className="kaynaksıralama"> Önerilen kaynaklar: ( {etap === 2 && branchone || etap === 3 && branchtwo || etap === 4 && branchthree} )
         {kaynak.map((k) => {
                return (<li key={k.id} className="sıralama">

                    <h3>{k.kaynakismi} </h3>
                    <p> ( {k.kategori} ) </p>
                </li>)

            })}</ul>
        </div>
    );
}

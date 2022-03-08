import React, {Component, useState} from "react";
import '../styles/App.css';

export default function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState("");
    
    const calculateRelation = () => {
        if(name1 === "" || name2 === "") {
            setResult("Please Enter valid input");
            return;
        }
        let indexOfN2 = -1;
        let n1 = name1.split("");
        let n2 = name2.split("");
        console.log(n1, n2);
        let total = -1;
        let indexesOfN1 = [];
        let indexesOfN2 = [];
        for(let i in n1) {
            indexOfN2 = n2.includes(n1[i])? n2.indexOf(n1[i]) : -1;
            if(indexOfN2 != -1) {
                indexesOfN2 = [...indexesOfN2, indexOfN2];
                indexesOfN1 = [...indexesOfN1, i];
            }
        }
        console.log(indexesOfN1, indexesOfN2);
        let len1 = n1.length - indexesOfN1.length;
        let len2 = n2.length - indexesOfN2.length;
       
        console.log(len1, len2);
        total = (len1 + len2)%6;
        switch (total) {
            case 1:
                setResult("Friends");
                break;
            case 2:
                setResult("Love");
                break;
            case 3:
                setResult("Affection");
                break;
            case 4:
                setResult("Marriage");
                break;
            case 5:
                setResult("Enemy");
                break;
            case 0:
                setResult("Siblings");
                break;
            default:
                break;
        }
    }
    return(
        <div id="main">
            <input value = {name1} data-testid="input1" type = "text" placeholder="Enter first name" onChange={(event) => {
                setName1(event.target.value);
            }}/>
            <input value = {name2} data-testid="input2" type="text" placeholder="Enter second name" onChange={(event) => {
                setName2(event.target.value);
            }}/><br/><br/><br/>
            <button data-testid="calculate_relationship" onClick={() => {
                calculateRelation();
            }}>Calculate Relationship</button>
            <button data-testid="clear" onClick={() => {
                setName1("");
                setName2("");
                setResult("");
            }}>Clear</button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    )
}

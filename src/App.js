import React, { useEffect, useState } from 'react'
import './App.css';
import Monitor from './monitor/Monitor';
import Keypad from './keypad/Keypad';
import * as math from 'mathjs';

function App() {

  const [sign, setSign] = useState('');
  const [clearmonitor, setClearMonitor] = useState(false)
  const [expandedList, setexpandedList] = useState(false)
  const [sum, setSum] = useState('');
  const [inverse, setInverse] = useState(false);
  const [mode, setMode] = useState("rad");


  useEffect(()=>{
    if(expandedList){
      document.querySelectorAll('.expanded-keypad button').forEach(button => {
            if(button.textContent === '<>'){
              button.style.color = "red"
            }
          })
    }
  },[expandedList])

  useEffect(()=>{
    if(mode === 'deg'){
      document.querySelectorAll('.expanded-keypad button').forEach(button => {
            if(button.textContent === 'DEG'){
              button.textContent = 'RAD';
              button.style.color = "red";
            }
          })
    }
    else{
      document.querySelectorAll('.expanded-keypad button').forEach(button => {
            if(button.textContent === 'RAD'){
              button.textContent = 'DEG';
              button.style.color = "blue";
            }
    })
  }
  },[mode])

  useEffect(()=>{
      try{
        if(inverse){
            document.querySelectorAll('.expanded-keypad button').forEach(button =>{
              if(button.textContent === 'INV'){
                button.style.color = 'red'
              }
            });
          }
          else{
            document.querySelectorAll('.expanded-keypad button').forEach(button =>{
              if(button.textContent === 'INV'){
                button.style.color = 'blue'
              }
            });
          }
        const variables = {
        cos: inverse === true ? 'cos^-1' : 'cos',
        sin: inverse === true ? 'sin^-1' : 'sin',
        tan: inverse === true ? 'tan^-1' : 'tan',
        log: inverse === true ? '10^x': 'log',
        rootsq: inverse === true ? 'x^2': 'rootsq',
        ln: inverse === true ? 'e^x' : 'ln',
      }
      document.querySelectorAll('.expanded-keypad button').forEach(button => {
        if(button.textContent === 'cos'){
          button.textContent = variables.cos;
        }
        else if(button.textContent === 'cos^-1'){
          button.textContent = variables.cos;
        }
        if(button.textContent === 'sin'){
          button.textContent = variables.sin;
        }
        else if(button.textContent === 'sin^-1'){
          button.textContent = variables.sin;
        }
        if(button.textContent === 'tan'){
          button.textContent = variables.tan;
        }
        else if(button.textContent === 'tan^-1'){
          button.textContent = variables.tan;
        }
        if(button.textContent === '10^x'){
          button.textContent = variables.log;
        }
        else if(button.textContent === 'log'){
          button.textContent = variables.log;
        }
        if(button.textContent === 'rootsq'){
          button.textContent = variables.rootsq;
        }
        else if(button.textContent === 'x^2'){
          button.textContent = variables.rootsq;
        }
        if(button.textContent === 'ln'){
          button.textContent = variables.ln;
        }
        else if(button.textContent === 'e^x'){
          button.textContent = variables.ln;
        }
      })
      }
      catch(error){
        console.log('error');
      }
         
  },[inverse])

    function Showthesign(e) {
        if(e.target.textContent === '<>' && expandedList === false){
          setexpandedList(true)
          setSign(sign);
  
        }
        else if(e.target.textContent === '<>' && expandedList === true){
          if(inverse || mode === "deg"){
            document.querySelectorAll('.expanded-keypad button').forEach(button =>{
              if(button.textContent === 'INV'){
                button.style.color = 'blue';
                setInverse(false);
              }
            });
            document.querySelectorAll('.expanded-keypad button').forEach(button => {
              if(button.textContent === 'RAD'){
                button.style.color = 'blue';
                setMode("rad");
              }
            })
          }
          setexpandedList(false);
          setSign(sign);
        }
        else if(e.target.textContent === 'AC'){
          setSign('');
          setSum('');
          setClearMonitor(false);
        }
        else if(e.target.textContent === 'C'){
          const newValue = sign.slice(0, -1);
          if(newValue === ''){
            setClearMonitor(false);
          }
          setSign(newValue);
        }
        else if(e.target.textContent === 'INV'){
          setInverse(inverse === false ? true : false);
        }
        else if(e.target.textContent === 'RAD' || e.target.textContent === 'DEG'){
          setMode(mode === "rad" ? "deg" : "rad");
        }
        else if(e.target.textContent === 'n!'){
          setClearMonitor(true);
          setSign(sign + '!');
        }
        else if(e.target.textContent === 'e^x'){
          setClearMonitor(true);
          setSign(sign + 'exp(');
        }
        else if(e.target.textContent === 'e'){
          setClearMonitor(true);
          setSign(sign + 'e*');
        }
        else if(e.target.textContent === 'x^2'){
          setClearMonitor(true);
          setSign(sign + '^2');
        }
        else if(e.target.textContent === '10^x'){
          setClearMonitor(true);
          setSign(sign + '10^');
        }
        else if(e.target.textContent === ' '){
          if(sign === ''){
            setClearMonitor(false);
            setSign(sign);
          }else{
            setClearMonitor(true);
            setSign(sign);
          }
        }
        else if(e.target.textContent === '='){
          try { 
            const allVariables = {
                pi: math.pi, 
                e: math.e, 
                ln: math.log, 
                log: math.log10,
                rootsq: math.nthRoot,
                '^': math.sqrt,
                'e^x': math.exp,
                sin: mode === "rad" ? math.sin : (x)=> math.sin(math.unit(x, 'deg')), 
                cos: mode === "rad" ? math.cos : (x)=> math.cos(math.unit(x, 'deg')), 
                tan: mode === "rad" ? math.tan : (x)=> math.tan(math.unit(x, 'deg')), 
                'sin^-1': mode === "rad" ? math.asin : (x)=> math.asin(math.unit(x, 'deg')), 
                'cos^-1': mode === "rad" ? math.acos : (x)=> math.acos(math.unit(x, 'deg')), 
                'tan^-1': mode === "rad" ? Math.atan : (x)=> math.atan(math.unit(x, 'deg')), 
            }; 
            const evaluated_expression = sign
            .replace('%', '/100*')
            .replace(/(\d+)!/g, (_, n) => `factorial(${n})`)
            .replace('sin^-1', 'asin')
            .replace('cos^-1', 'acos')
            .replace('tan^-1', 'atan');

            const result = math.evaluate(evaluated_expression, allVariables);
            console.log(result); 
            if (typeof result === "number" && !isNaN(result)) { 
                setSum(Number(result).toFixed(4)); 
            } else { 
                setSum("Error: Invalid expression"); 
            } 
        } catch (error) { 
            setSum("Error: Invalid expression. Use opening and closing first bracket where it's necessary"); 
        } 
        }
        else{
          setClearMonitor(true)
          setSign( sign + e.target.textContent)
        }
    }
  return (
    <div className="Calculator-App">
        <Monitor sign={sign} clearmonitor={clearmonitor} sum={sum} expandedList={expandedList} mode={mode}/>
        <Keypad Showthesign={Showthesign} expandedList={expandedList}/>
    </div>
  );
}

export default App;

import './App.css';
import {useState} from "react";
import {Backdrop, Stack} from '@mui/material'
import images from "./images";

function App(){


    const [rando, setRando] = useState(Math.floor(Math.random() * 33));
    const [rando1, setRando1] = useState(Math.floor(Math.random() * 33));
    const [score, setScore] = useState(0)
    const [screen, setScreen] = useState(false)
    const [maxScore, setMax] = useState(0);


    const test = images



    function checkThis(){
        if(test[rando].includes("trulySheeran")){
            setScore(score + 1)
            getNewImage()
        }
        else{
            setScreen(true)
        }
    }
    function checkThat(){
        if(test[rando1].includes("trulySheeran")){
            setScore(score + 1)
            getNewImage()

        }
        else{
            setScreen(true)
        }
    }
    function checkBoth(){
        if(!test[rando1].includes("trulySheeran") && !test[rando].includes("trulySheeran")){
            setScore(score + 1)
            getNewImage()

        }
        else{
            setScreen(true)

        }

    }

    function reset(){
        updateMax()
        setScore(0)
        setScreen(false)
        getNewImage()
    }

    function updateMax(){
        setMax(Math.max(score, maxScore))
    }

    function getNewImage(){
        setLoading(true)
        setRando(Math.floor(Math.random() * 33))
        setRando1(Math.floor(Math.random() * 33))
        if(rando === rando1){
            setRando(Math.floor(Math.random() * 33))
            setRando1(rando1 - 1)
        }
        setLoading(false)
    }


    const [loading, setLoading] = useState(false);
    return (
    <div className={"App"}>
        <Backdrop open={screen}>
            <Stack>
                <text className={"blockText"}>
                    Oops! Wrong ginger!
                </text>
                <button className={"button"} onClick={reset}>
                    Reset?
                </button>
            </Stack>
        </Backdrop>
        <Backdrop open={loading}>
            <text className={"blockTextGood"}>
                Found the Sheeran
            </text>
        </Backdrop>
        <div className={"imageContainer"}>

            <img src={test[rando]} alt={"test"} className={"image"}/>
            <Stack>
                <button onClick={checkThis} className={"button"}>This</button>
                <button onClick={checkThat} className={"button"}>That</button>
                <button onClick={checkBoth} className={"button"}>Neither</button>
            </Stack>

            <img src={test[rando1]} alt={"test"} className={"image"}/>
        </div>
        <text style={{textAlign: "center", fontSize: 50, fontFamily: 'Hanalei Fill'}}>Score: {score}</text>
        <br/>
        <text style={{textAlign: "center", fontSize: 50, fontFamily: 'Hanalei Fill'}}>Max score: {maxScore}</text>
    </div>


  );

}

export default App;

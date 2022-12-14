import './App.css';
import {useState} from "react";
import {Backdrop, Stack} from '@mui/material'

function App() {
    const [rando, setRando] = useState(Math.floor(Math.random() * 10));
    const [rando1, setRando1] = useState(Math.floor(Math.random() * 10));
    const [score, setScore] = useState(0)
    const [screen, setScreen] = useState(false)
    const [maxScore, setMax] = useState(0);
    const test = [
        require('./Sheeran/1e839297489f85e77ebeff79f208f00c.jpg'),
        require('./Sheeran/51bed08814f4e33d2fef4638455246ae.jpg'),
        require('./Sheeran/933b961e2d4a807534fcedfbc10f610d.png'),
        require('./Sheeran/IMG_1583.png'),
        require('./Sheeran/edsheeranlookalike2.jpg'),
        require('./Sheeran/maxresdefault.jpg'),
        require('./Sheeran/trulySheeran.jpg'),
        require('./Sheeran/trulySheeran1.jpg'),
        require('./Sheeran/trulySheeran2.png'),
        require('./Sheeran/trulySheeran3.png'),
        require('./Sheeran/trulySheeran4.png'),
    ]

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
        setRando(Math.floor(Math.random() * 10))
        setRando1(Math.floor(Math.random() * 10))
        if(rando === rando1){
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
        }
    }



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
        <div className={"imageContainer"}>

            <img src={test[rando]} alt={"test"} className={"image"}/>
            <Stack>
                <button onClick={checkThis} className={"button"}>This</button>
                <button onClick={checkThat} className={"button"}>That</button>
                <button onClick={checkBoth} className={"button"}>Neither</button>
            </Stack>

            <img src={test[rando1]} alt={"test"} className={"image"}/>
        </div>
        <text style={{textAlign: "center", fontSize: 50}}>Score: {score}</text>
        <br/>
        <text style={{textAlign: "center", fontSize: 50}}>Max score: {maxScore}</text>
    </div>


  );

}

export default App;

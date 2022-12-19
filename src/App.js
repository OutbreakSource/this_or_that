import './App.css';
import {useState} from "react";
import {Stack} from '@mui/material'

function App() {
    const [rando, setRando] = useState(Math.floor(Math.random() * 10));
    const [rando1, setRando1] = useState(1);
    const [score, setScore] = useState(0)

    //Test commit
    function checkThis(){
        if(test[rando].includes("trulySheeran")){
            setScore(score + 1)
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
            console.log("check1")

        }
        else{
            console.log(test[rando])
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
        }
    }
    function checkThat(){
        if(test[rando1].includes("trulySheeran")){
            setScore(score + 1)
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
            console.log("check1")

        }
        else{
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
        }
    }
    function checkBoth(){
        if(!test[rando1].includes("trulySheeran") && !test[rando].includes("trulySheeran")){
            setScore(score + 1)
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
        }
        else{
            setRando(Math.floor(Math.random() * 10))
            setRando1(Math.floor(Math.random() * 10))
        }

    }

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

  return (
    <div className={"App"}>
        <div className={"test"}>
            <img src={test[rando]} alt={"test"} style={{height: 500, width: 500}}/>
            <Stack>
                <button onClick={checkThis} className={"button"}>This</button>
                <button onClick={checkThat} className={"button"}>That</button>
                <button onClick={checkBoth} className={"button"}>Neither</button>
            </Stack>

            <img src={test[rando1]} alt={"test"} style={{height: 500, width: 500}}/>
        </div>
        <text style={{textAlign: "center", fontSize: 50}}>Score: {score}</text>


    </div>


  );

}

export default App;

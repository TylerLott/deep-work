import React from "react"
import { TimeContainer, TimerButton } from "./TimerElements"

const Timer = () => {
  const [time, setTime] = React.useState(0)
  const [timerOn, setTimeOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 3600) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + (time % 60)).slice(-2)}</span>
      </div>

      <TimeContainer>
        {!timerOn && time === 0 && (
          <TimerButton onClick={() => setTimeOn(true)}>Start</TimerButton>
        )}

        {timerOn && (
          <TimerButton onClick={() => setTimeOn(false)}>Stop</TimerButton>
        )}

        {!timerOn && time !== 0 && (
          <TimerButton onClick={() => setTimeOn(true)}>Resume</TimerButton>
        )}
        {!timerOn && time !== 0 && (
          <TimerButton onClick={() => setTime(0)}>Reset</TimerButton>
        )}
      </TimeContainer>
    </div>
  )
}

export default Timer

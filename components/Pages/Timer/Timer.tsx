import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Styles
import styles from './Styles.module.scss';

//Assets
import fantasmitas from '@assets/gifs/fantasmitas.gif';

//Types
type Props = {
  date: string;
  setPage: (page: number) => void;
};

const Timer = ({ date, setPage }: Props) => {
  const alreadyPassed = new Date(date).getTime() - new Date().getTime() < 0;

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  const interval = useRef<undefined | NodeJS.Timeout>(undefined);

  const startTimer = () => {
    const CountdownDate = new Date(date).getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      // This is given in milliseconds
      const distance = CountdownDate - now;

      //Set the counter starting from 10 seconds if the date has already passed
      if (alreadyPassed) {
        clearInterval(interval.current);
        setTimerDays('00');
        setTimerHours('00');
        setTimerMinutes('00');
        setTimerSeconds('10');

        // Start countdown for 10 seconds
        const countdownInterval = setInterval(() => {
          setTimerSeconds((prevSeconds) => {
            const seconds = parseInt(prevSeconds);
            if (seconds > 0) {
              // If seconds is greater than 0, return the seconds - 1
              return (seconds - 1).toString().padStart(2, '0');
            } else {
              //Set the next page here
              setPage(1);
              clearInterval(countdownInterval);
              return '00';
            }
          });
        }, 1000);
      }

      // If the date has not passed yet, set the timer
      if (!alreadyPassed) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days.toString().padStart(2, '0'));
        setTimerHours(hours.toString().padStart(2, '0'));
        setTimerMinutes(minutes.toString().padStart(2, '0'));
        setTimerSeconds(seconds.toString().padStart(2, '0'));

        // If distance is less than 0, clear the interval and set the timer to 00
        if (distance < 0) {
          //Set the next page here
          setPage(1);
          clearInterval(interval.current);
          setTimerDays('00');
          setTimerHours('00');
          setTimerMinutes('00');
          setTimerSeconds('00');
        }
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>El gran día se acerca</h1>

      <Image
        className={styles.fantasmitas}
        src={fantasmitas}
        alt='Fantasmitas'
        width={300}
      />

      <p className={styles.quote}>
        La paciencia es amarga, pero sus frutos son dulces...
      </p>

      <div className={styles.timer}>
        <section>
          <p>{timerDays}</p>
          <p>
            <small>Días</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p>
            <small>Horas</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p>
            <small>Minutos</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p>
            <small>Segundos</small>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Timer;

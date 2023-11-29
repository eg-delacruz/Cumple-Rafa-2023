import { useState, useRef, useEffect } from 'react';

// Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';

//Types
type Props = {
  date: string;
};

const Timer = ({ date }: Props) => {
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

      if (distance <= 0) {
        // Timer has finished, show 10 seconds countdown
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
              return (seconds - 1).toString().padStart(2, '0');
            } else {
              clearInterval(countdownInterval);
              return '00';
            }
          });
        }, 1000);
      } else {
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
    <Layout>
      <div>
        <h1>Harry Potter</h1>
        <h2>Harry Potter</h2>
        <h3>Harry Potter</h3>
        <h4>Harry Potter</h4>
        <h5>Harry Potter</h5>
        <h6>Harry Potter</h6>

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
    </Layout>
  );
};

export default Timer;

import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import sapo from '@assets/gifs/sapo.gif';

//Types
type Props = {
  children: React.ReactNode;
  theme?: 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';
};

const Layout = ({ theme = 'gryffindor', children }: Props) => {
  return (
    <div
      className={`${styles.pagebg} 
      ${
        theme === 'gryffindor'
          ? styles.gryffindor
          : theme === 'slytherin'
          ? styles.slytherin
          : theme === 'hufflepuff'
          ? styles.hufflepuff
          : styles.ravenclaw
      }
    `}
    >
      <header className={styles.header}>
        <div className={`${styles.header__container} container`}>
          <h3>La aventura del cuerpito de sapo</h3>
          <Image src={sapo} alt='sapo' width={100} height={100} />
        </div>
      </header>
      <main className={`${styles.main} container`}>{children}</main>
    </div>
  );
};

export default Layout;

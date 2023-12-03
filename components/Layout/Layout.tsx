import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import sapo from '@assets/gifs/sapo.gif';

//Types
type Props = {
  children: React.ReactNode;
  theme?: 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';
  main_width?: 1000 | 700;
};

const Layout = ({
  theme = 'gryffindor',
  main_width = 700,
  children,
}: Props) => {
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
      <main
        className={`${styles.main} ${
          main_width === 1000 ? styles.main_1000_width : null
        } container`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;

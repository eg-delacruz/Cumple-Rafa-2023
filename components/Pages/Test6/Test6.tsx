//Styles
import styles from './Styles.module.scss';

//Components
import Layout from '@components/Layout/Layout';

//Types
type Props = {
  setPage: (page: number) => void;
};

const Test6 = ({ setPage }: Props) => {
  const THEME = 'gryffindor';
  return (
    <Layout theme={THEME}>
      <h2>Un mensaje indescifrable</h2>
    </Layout>
  );
};

export default Test6;

import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Messi = ({ ninjas }) => {
  return (
    <div>
      <h1>Messi Home Page</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.address.city}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Messi;

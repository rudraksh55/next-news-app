
import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.css';  
export const Toolbar = () => {

  const route=useRouter();
  return (
    <div className={styles.main}>
      <div onClick={()=>route.push('/')}>Home</div>
      <div onClick={()=>route.push('/feed/1')}>Feed</div>
      <div onClick={()=>route.push('/Profile')}>My Profile</div>
      <div onClick={()=>window.location.href='https://twitter.com/RudrakshKumawa7'}> Twitter</div>
    </div>
  );
};

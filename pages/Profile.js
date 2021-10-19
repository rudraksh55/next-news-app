import Styles from '../styles/profile.module.css'
export const Profile = ({ profile }) => {
    console.log(profile)
  return (
    <div className={Styles.main}>
      <div>
        <h1>Created by Rudraksh</h1>
<div className={Styles.profile}>
        <h3>{profile.name}</h3>
        <h6>{profile.position}</h6>
        <img src={profile.image} />
        <p>{profile.description}</p>
        </div>
      </div>    
    </div>
  );
};
export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/rudraksh55/next-news-app/blob/main/profile',
  );
  const profile = await apiResponse.json();

  return {
    props: {
      profile
    }
  }
};
export default Profile;

import UserProfile from './UserProfile';


const usersList = [
  { id: '1', fname: 'Sachin', Interests: ['Singing', 'Playing Piano', 'Programming'] },
  { id: '2', fname: 'Ragini', Interests: ['Dancing', 'Cooking', 'Makeup'] },
  { id: '3', fname: 'Roop', Interests: ['Drawing', 'Dancing', 'Writing'] }
];

const UserListContainer = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Team Profiles</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: 'red',
        borderRadius: "30px"
      }}>
        {usersList.map((individualUser) => (
          // Key hamesha map ke direct child par honi chahiye
          <UserProfile key={individualUser.id} userData={individualUser} />
        ))}
      </div>
    </div>
  );
};

export default UserListContainer;
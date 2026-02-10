import Card from './reusableCard'

const ReusableCardComponent = () => {


  // 4. Data in objects for Reusable Card 


  const images = [{
    id: 'img-001',
    iurl: 'https://plus.unsplash.com/premium_photo-1770621459604-ff0c46c39a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Ulte pair🤣',
    idesc: 'No description'
  },
  {
    id: 'img-002',
    iurl: 'https://images.unsplash.com/photo-1770037947897-201aa3ca32d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Flower',
    idesc: 'This image shows the scenery of Flower'
  }
    ,
  {
    id: 'img-003',
    iurl: 'https://images.unsplash.com/photo-1770129703548-e1ced0e4f118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Random Art',
    idesc: 'This image shows the deep art of random-ness'
  }
    ,
  {
    id: 'img-004',
    iurl: 'https://images.unsplash.com/photo-1770297346174-42b41a98c990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Its Chinese',
    idesc: 'This image shows the chinese language on building'
  }
    ,
  {
    id: 'img-005',
    iurl: 'https://plus.unsplash.com/premium_photo-1770554274153-1b608afd6963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Code Vibe',
    idesc: 'coding the vibe only'
  }
    ,

  {
    id: 'img-006',
    iurl: ' https://plus.unsplash.com/premium_photo-1770455273752-375310609b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D',
    userName: 'Sachin Sharma',
    iname: 'Its Galactic world',
    idesc: 'Experience the galactic'
  }
  ]


  return (
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {images.map((item) => {
        return <Card key={item.id} images={item} />
      }
      )
      }
    </div>
  )
}
  export default ReusableCardComponent;
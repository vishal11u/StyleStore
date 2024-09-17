import React, { useEffect, useState } from 'react'
import App from './App';
import Preloader from './scrollUp/Preloader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <div>
      {
        loading ? <Preloader /> : <App />
      }
    </div>
  )
}

export default Home;
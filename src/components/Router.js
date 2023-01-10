import { useState } from 'react';

export default function Router(props) {
  const [route, setRoute] = useState({
    path: '/',
    props: {}
  })

  switch(route.path){
    case '/':
      return <h1>the / route</h1>

    case '/cheese':
      return <h1>the cheese route</h1>

    default: 
      return <h1>Default</h1>
  }

}
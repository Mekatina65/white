import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home = () => {
  return ( 

    <div className= {styles.container}>
    
        <Link a href="/cont/northamerica"><a> North America</a></Link> <br /> 
        <Link a href="/cont/southamerica"><a> South America</a></Link>
        <h1>try this</h1>
        <h1>try this</h1>
        </div>
   );
}
 
export default Home;
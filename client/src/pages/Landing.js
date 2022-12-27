import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/primary.svg'
import { Link,Navigate} from 'react-router-dom'
import {Logo} from '../components'
import { useAppContext } from '../context/appContext'
const Landing = () => {
  const{user}=useAppContext()
  return (
    <>
    {user && <Navigate to='/'/>}
    <Wrapper>
    <nav>
 <Logo/>
    </nav>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae architecto itaque quibusdam. Saepe atque mollitia necessitatibus possimus dolore accusamus animi, vero aperiam dolor assumenda quos similique molestias rem voluptas, eos nihil tempora iste odit culpa ad aspernatur incidunt. Reiciendis?</p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
     </>
  )
}

export default Landing
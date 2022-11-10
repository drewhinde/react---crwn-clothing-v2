  npm install react-router-dom@6

  wrap entire app in react-router on index.js 

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

  BrowserRouter is a cmpnt and can wrap our entire app

  Only render the correct cmpnt when url matches

  import {Routes, Route} from 'react-router-dom' in app.js

  wrap cmpnts in <Routes> cmpnt

  <Routes>
	  <Home />
  </Routes>

  add <Route> cmpt and add a path to the url you want to match and the cmpnt you want to render

  <Routes>
	  <Route path='/' element={<Home />} />
  </Routes>

  localhost:300 will now render the home cmpnt.


  Nested Routes
  <Route> can have child cmpnts inside them which are relative to parent routes.  Parent cmpts will render unless we tell them not to.  

  <Routes>  
    {/* localhost:300/home */}
	  <Route path='/home' element={<Home />}>
      {/* localhost:300/home/shop */}
      <Route path='shop' element={<shop />}>
    </Route>
  </Routes>

  Also need to go into parent cmpnt and tell it where we want react-router-dom to render the child. 

  import { Outlet } from 'react-render-dom'

  Render outlet in return statement of cmpnt you want to render it in

  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
  
  in the above index specifies which cmpnt to show on the 'index' page of the website.  there is an <Outlet> cmpnt in the navigation.components.jsx file:

  <div>
    <div>
        <h1>Navigation Bar</h1>
    </div>
    <Outlet />
  </div>

  which wil render children of the top level path


  <Fragment>
      <div className='navigation'>
        <div>Logo</div>
        <div className='nav-links-container'>
          {/* Link is an anchor tag*/}
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
    </div>
    <Outlet />
  </ Fragment>

  Fragment renders nothing and is a good way of getting aroud the single parent element restrictions of react

  Can import svgs as components

  import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
  <CrwnLogo className='logo' />
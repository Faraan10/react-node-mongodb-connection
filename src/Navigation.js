import {Link} from 'react-router-dom'
function Navigation(){
	return(
		<div className="navbarstyle">
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/products">Products</Link>
			<Link to="/cart">Cart</Link>
			<Link to="/registration">Registration</Link>
		</div>
		)
}
export default Navigation
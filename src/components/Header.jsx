import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="p-2 align-items-center d-flex justify-content-between">
                        <div className='d-flex gap-3'>
                            <NavLink className="navbar-brand" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="posts">Posts</NavLink>
                            <NavLink className="nav-link" to="reserved-area">Reserved Area</NavLink>
                            <NavLink className="nav-link">Disabled</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}
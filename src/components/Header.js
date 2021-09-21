import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="gradients">Vinyl Collection Management</h1>

            <div className="links">
                
                    <NavLink to="/" className="link link-active slide-in-left" activeClassName="active" exact>
                        Vinyls List
                    </NavLink>
              
                    <NavLink to="add-vinyl" className="link  link-active slide-in-right" activeClassName="active">
                        Add Vinyl
                    </NavLink>

                <div className="vinyl-wrapper">
                    <div className="vinyl"></div>
                    <div className="record-sleeve"></div> 
                </div>

            </div>
        </header>
    )
}

export default Header;



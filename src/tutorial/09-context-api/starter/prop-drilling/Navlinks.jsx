import UserContainer from "./UserContainer"

const Navlinks = ({ user, logout }) => {
    return (
        <div className="nav-container">
            <ul className="nav-links">
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
                <UserContainer user={user} logout={logout} />
            </ul>
        </div>
    )
}
export default NavLinks
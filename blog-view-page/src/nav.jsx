function Nav(){
    return(
        <>
        <nav>
        <h1>Bloggsy</h1>
        <div className="navBar">
            <div className="leftNavSection">
                <a href="">Blogs</a>
                <a href="">About</a>
            </div>
            <div className="rightNavSection">
                <button>Toggle Theme</button>
                <a href="">Login</a>
                <a href="">Signup</a>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Nav
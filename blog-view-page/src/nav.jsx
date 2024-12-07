import style from 'styled-components'
function Nav(){
    const NavBar=style.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:5px 20px;
    `
    const LeftNavSection=style.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:20px`
    const RightNavSection=style.div`
     display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:20px
    `
    return(
        <>
        <nav>
        <h1>Bloggsy</h1>
        <NavBar>
            <LeftNavSection>
                <a href="">Blogs</a>
                <a href="">About</a>
            </LeftNavSection>
            <RightNavSection>
                <button>Toggle Theme</button>
                <a href="">Login</a>
                <a href="">Signup</a>
            </RightNavSection>
        </NavBar>
        </nav>
        </>
    )
}
export default Nav
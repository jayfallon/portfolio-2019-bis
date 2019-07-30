import Link from 'next/link';
import HeaderStyles from './styles'
import DrawerToggleButton from './drawerToggle'

const Header = (props) => (

    <HeaderStyles id="pageTop">
        <section className="header__content">
            <h1>
                <Link href="/"><a title="Link to home page">Jay Fallon</a></Link>
            </h1>
            <nav>
                <h3>Digital Design &amp; Development</h3>
                <DrawerToggleButton click={props.drawerClickHandler}/>
                <ul className="header__nav">
                    <li>
                        <Link href="/about"><a title="">About</a></Link>
                    </li>
                    <li>
                        <Link href="/projects"><a title="">Projects</a></Link>
                    </li>
                    <li>
                        <Link href="/resume"><a title="">Experience</a></Link>
                    </li>
                    <li>
                    <Link href="/static/resume/jayfallon-resume-2019.pdf"><a target="_blank" title="Download Jay's resume">Download Resume</a></Link>
                    </li>
                </ul>
            </nav>
        </section>
    </HeaderStyles>
)

export default Header

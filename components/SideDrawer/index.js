import Link from 'next/link';
import {ThemeProvider} from 'styled-components';
import SideDrawerStyles, {DrawerToggleButtonStyles} from './styles'

const SideDrawer = props => {
    let drawerClasses = [''];
    if(props.show) {
        drawerClasses = ['open'];
    }
    return (
        <ThemeProvider theme={{ mode: 'light' }}>
            <SideDrawerStyles className={drawerClasses}>
                <h1>
                    <Link href="/"><a title="Link to home page">Jay Fallon</a></Link>
                    <DrawerToggleButtonStyles onClick={props.hide}>
                        <i className="fal fa-times"></i>
                    </DrawerToggleButtonStyles>
                </h1>
                <ul className="sideDrawer__nav" onClick={props.hide}>
                    <li>
                        <Link href="/about"><a title="More about Jay">About</a></Link>
                    </li>
                    <li>
                        <Link href="/projects"><a title="Jay's recent projects">Projects</a></Link>
                    </li>
                    <li>
                        <Link href="/experience"><a title="Jay's cummulative experience">Experience</a></Link>
                    </li>
                    <li>
                    <Link href="/static/resume/jayfallon-resume-2019.pdf"><a target="_blank" title="Download Jay's resume">Download Resume</a></Link>
                    </li>
                </ul>
                
            </SideDrawerStyles>
        </ThemeProvider>
    )
}

export default SideDrawer

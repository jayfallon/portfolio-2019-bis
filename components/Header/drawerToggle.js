import {DrawerToggleButtonStyles} from './styles'

const DrawerToggleButton = props => (
    <DrawerToggleButtonStyles className="toggleButton" onClick={props.click}>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
    </DrawerToggleButtonStyles>
)

export default DrawerToggleButton

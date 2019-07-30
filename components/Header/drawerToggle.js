import {DrawerToggleButtonStyles} from './styles'

const DrawerToggleButton = props => (
    <DrawerToggleButtonStyles className="toggleButton" onClick={props.click}>
        <i className="far fa-bars"></i>
    </DrawerToggleButtonStyles>
)

export default DrawerToggleButton

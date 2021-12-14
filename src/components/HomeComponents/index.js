import { MobileShieldStyle, ShieldStyle } from "./style";
import Shield from './shield.svg'

export default function HomeShield() {
    return(
    <ShieldStyle src={Shield} />
    )
}

export function MobileHomeShield() {
    return(
        <MobileShieldStyle src={Shield} />
        )

}
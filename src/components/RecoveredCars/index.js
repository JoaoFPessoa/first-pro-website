import { CarIcon, CardContainer, Container, LeftArrow, Rectangle, RightArrow, Subtitle, Title, Card, Location, LocationContainer, Location2, Location3, Location4, DateContainer, Date } from "./style";
import Car1 from '../../img/car 1.svg'
import Arrow from '../../img/Arrow.svg'
import Arrow2 from '../../img/Arrow2.svg'
import RecoveredCar1 from '../../img/RecoveredCar1.svg'
import RecoveredCar2 from '../../img/RecoveredCar2.svg'
import RecoveredCar3 from '../../img/RecoveredCar3.svg'
import RecoveredCar4 from '../../img/RecoveredCar4.svg'

export default function RecoveredCars() {
    return (
    <Container>
        <Rectangle>
        <CarIcon src={Car1} />
        </Rectangle>
        <Subtitle>
        Pronta resposta veicular
        </Subtitle>
        <Title>
        Carros recuperados
        </Title>
        <LeftArrow src={Arrow} />
        <RightArrow src={Arrow2} />
        <CardContainer>
        <Card src={RecoveredCar1} />
        <Card src={RecoveredCar2} />
        <Card src={RecoveredCar3} />
        <Card src={RecoveredCar4} />
        </CardContainer>

        <LocationContainer>
        <Location>
            Pinhais - São Paulo
        </Location>
        <Location>
            Pinhais - São Paulo
        </Location>
        <Location>
            Pinhais - São Paulo
        </Location>
        <Location>
            Pinhais - São Paulo
        </Location>
        </ LocationContainer>
        <DateContainer>
            <Date>
            Recuperado em 21.11/2021
            </Date>
            <Date>
            Recuperado em 21.11/2021
            </Date>
            <Date>
            Recuperado em 21.11/2021
            </Date>
            <Date>
            Recuperado em 21.11/2021
            </Date>
        </DateContainer>
    </Container>

    )

}
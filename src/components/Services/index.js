import React from 'react'
import Icon1 from "D:/my-app/my-app/src/images/svg-1.svg"
import Icon2 from "D:/my-app/my-app/src/images/svg-4.svg"
import Icon3 from "D:/my-app/my-app/src/images/svg-5.svg"
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Ver baches</ServicesH2>
            <ServicesP>Puedes ver la ubicación de los baches en un mapa.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Generar Reportes</ServicesH2>
            <ServicesP>Puedes generar reportes de dichos baches y visualizarlos.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Registrar baches</ServicesH2>
            <ServicesP>Puedes hacerlo a través de la app móvil.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

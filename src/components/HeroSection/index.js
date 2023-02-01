import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Baches Bogotá</HeroH1>
        <HeroP>
          Ingrese con su cuenta para ver los datos registrados o generar reportes.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            Empezar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

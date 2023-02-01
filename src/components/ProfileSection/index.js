import React, {useState} from 'react'
import { ProfileContainer, ProfileContent, ProfH1, ProfP, ProfileBtnWrapper, ArrowForward, ArrowRight } from './ProfileElements'
import { Button } from '../ButtonElement'


const ProfileSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <ProfileContainer>
      <ProfileContent>
        <ProfH1>Bienvenido</ProfH1>
        <ProfP>
         ¡Se encuentra en su cuenta actualmente, podrá disfrutar de una variedad de funcionalidades!
        </ProfP>
        <ProfileBtnWrapper>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            ¡Nosotros! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ProfileBtnWrapper>
        <ProfileBtnWrapper>
          <Button to="discover" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            ¡Contáctanos! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ProfileBtnWrapper>
        <ProfileBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            ¡Ver mapa! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ProfileBtnWrapper>
        <ProfileBtnWrapper>
          <Button to="report" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            ¡Ver reportes! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ProfileBtnWrapper>
      </ProfileContent>
    </ProfileContainer>
    </>
  )
}

export default ProfileSection

import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    activeButton: Profile
  }

  handActiveState = (event) => {
    if ((event.target.classList.contains("icon") && (event.target.parentElement.classList.value === "item")) || (event.target.classList.contains("item") && (event.target.parentElement.classList.value === "ui four item menu"))){
      const name = event.target.id
      const currActive = document.getElementsByClassName("active")
      currActive[0].classList.remove("active")

      switch(name){
        case "photo":
          this.setState({
            activeButton: Photos
          })
          document.getElementsByTagName("A").photo.classList.add("active")
          break;
        case "cocktail":
          this.setState({
            activeButton: Cocktails
          })
          document.getElementsByTagName("A").cocktail.classList.add("active")
          break;
        case "pokemon":
          this.setState({
            activeButton: Pokemon
          })
          document.getElementsByTagName("A").pokemon.classList.add("active")
          break;
        case "profile":
          this.setState({
            activeButton: Profile
          })
          document.getElementsByTagName("A").profile.classList.add("active")
          break;
        default:
        console.log("SLOW DOWN PARTNER!")
      }
    }
  }


  render() {
    return (
      <div onClick={this.handActiveState}>
        <MenuBar />
        <this.state.activeButton />
      </div>
    )
  }
}

export default MainBox

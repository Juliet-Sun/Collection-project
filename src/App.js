import './App.css';
import Colleges from "./components/College"
import bakerCrest from "./images/bakerCrest.png"
import willriceCrest from "./images/willriceCrest.png"
import hanszenCrest from "./images/hanszenCrest.png"
import wiessCrest from "./images/wiessCrest.png"
import jonesCrest from "./images/jonesCrest.webp"
import brownCrest from "./images/brownCrest.png"
import lovettCrest from "./images/lovettCrest.jpg"
import sidrichCrest from "./images/sidrichCrest.jpeg"
import martelCrest from "./images/martelCrest.jpg"
import murtCrest from "./images/murtCrest.svg"
import duncanCrest from "./images/duncanCrest.png"

function App() {
  const colleges = [{
    "college_emblem": bakerCrest,
    "name": "Baker",
    "description": "Established in 1957. Baker is filled with traditions, like Houston's longest running Shakespeare festival, bakerShake, that gets passed on to all new Bakerites."
  },
  {
    "college_emblem": willriceCrest,
    "name": "Will Rice",
    "description": "Established in 1957. With the mystical phoenix as its mascot, Will Ricers pride themselves on their competitive nature. On Classy Thursdays, they even compete for best-dressed."
  },
  {
    "college_emblem": hanszenCrest,
    "name": "Hanszen",
    "description": "Etablished in 1957. A reflection of the close and caring relationships among its members and have fun have fun during events like their own Mardi Gras, study breaks, or trips to Galveston. "
  },
  {
    "college_emblem": wiessCrest,
    "name": "Wiess",
    "description": "Etablished in 1957. Go Pumpkin Caroling at Halloween, sign up for Tabletop Theatre, celebrate Wiess Day, or hang out with your fellow Wiessmen at a Team Fun Friday Wiess."

  },
  {
    "college_emblem": jonesCrest,
    "name": "Jones",
    "description": "Established in 1957. Jonesians bring fun to their college by celebrating the birthday of their namesake, Mary Gibbs Jones, with an annual birthday bash. "

  }, 
  {
    "college_emblem": brownCrest,
    "name": "Brown",
    "description": "Established in 1965. At Brown, the Brownies bond during the Brown Skate and hang out together during Fridays in the Quad."

  },
  {
    "college_emblem": lovettCrest,
    "name": "Lovett",
    "description": "Establisehd in 1968. Within those sturdy walls, Lovetteers carry on traditions like hosting the fancy Casino Party and socializing on the 2nd Floor Sundeck."

  }, 
  {
    "college_emblem": sidrichCrest,
    "name": "Sid Richardson",
    "description": "Establisehd in 1971.Though they are the smallest of all the residential colleges on campus, Sidizens take pride in their tower. Every Friday, you can find them spending time together in their Country Club."},

  {
    "college_emblem": martelCrest,
    "name": "Martel",
    "description": "Established in 2002. One of Martelians' favorite ways to honor their history is through Greek Week, a way to celebrate Martel and the Greek heritage of their founding father, Speros P. Martela. "

  }, 
  {
    "college_emblem": murtCrest,
    "name": "McMurtry",
    "description": "Established in 2009. Murts are establishing new traditions each year. And they celebrate their namesake's heritage with an annual McScottish Night."

  },
  {
    "college_emblem": duncanCrest,
    "name": "Duncan",
    "description": "Established in 2009. Whether it’s making milkshakes for Thirsty Thursday or playing ping pong during Monday Night Lights, Duncaroos are all about fostering community. "

  }, 
  
            
    ]

  return (
    <div className="App">
      <div className="header"> 
        <h1>Rice University Colleges</h1>

      </div>
      {/* body */}
      <div className="body">
        {colleges.map(colleges => 
          <Colleges college_emblem={colleges.college_emblem} name={colleges.name} description={colleges.description} />
        )}


      </div>

  
    </div>
  );
}

export default App;

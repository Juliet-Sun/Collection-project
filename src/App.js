import './App.css';
import Colleges from "./components/College"
import bakerCrest from "./images/bakerCrest.png"

function App() {
  const colleges = [{
    "college_emblem": bakerCrest,
    "name": "Baker",
    "description": "First college"
  },
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Hanszen",
    "description": "hi"
  },
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Sid Richardson",
    "description": "hi"
  },
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Jones",
    "description": "hi"

  },
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Weiss",
    "description": "hi"

  }, 
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Lovett",
    "description": "hi"

  },
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "McMurtry",
    "description": "hi"

  }, 
  {
    "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
    "name": "Duncan",
    "description": "hi"},

    {
      "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
      "name": "Martel",
      "description": "hi"
  
    }, 
    {
      "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
      "name": "Brown",
      "description": "hi"
  
    },
    {
      "college_emblem": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baker-college.com%2F&psig=AOvVaw3zoRYx8-NsC3LEBtpD5eu4&ust=1698606987817000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCh4qO6mYIDFQAAAAAdAAAAABAE",
      "name": "Will Rice",
      "description": "hi"
  
    }, 
  
            
    ]

  return (
    <div className="App">
      <div className="header"> 
        <h1>Colleges</h1>

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

import React, {useState} from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({

    color : "white",
    backgroundColor : "black",
})
  const toggleDarkMode = () => {
   if (myStyle.color =='white'){
    setMyStyle({
        color : "black",
        backgroundColor : "red",
    })
   }
   else{
    setMyStyle({
        color : "white",
        backgroundColor : "black",
    })
   }
  }


  return (
    <div id="about">
        <div className="container my-3" style={myStyle}>
          <h1>About Us</h1>
          <p>Welcome to our text analysis tool! We provide a simple and efficient way to analyze your text content.</p>
      <div>
        <p>Here is some additional information about our company and services.</p>
        <p>We are committed to providing the best user experience and continuously improving our tool based on user feedback.</p>
        <p>Feel free to reach out to us with any questions or suggestions. We value your input and look forward to hearing from you!</p>
        <p>Thank you for choosing our text analysis tool. We hope you find it useful and enjoyable to use!</p>
      </div>
      </div>
      <button className="btn btn-primary" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  let footerstyle = {
    
    width: "100%",
    border : "2px solid blue"
  }
  return (

    <footer className="bg-dark text-light"  style={footerstyle}>

      <p className="text-center" >
        Copyright &copy;  mytodolist.com
      </p>
    </footer>
  )
}

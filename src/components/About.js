import React from 'react'
export default function About(props) {
    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }
    
  return (
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Lorem, ipsum dolor.</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias minus doloremque, reiciendis quos ipsam deleniti sit ratione ducimus molestiae ab nam quia hic quibusdam quod, ea eligendi at eius! Officiis, amet.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Lorem, ipsum dolor.</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus deleniti tempora fugit distinctio, ex voluptates laudantium id, exercitationem doloribus quos saepe iure sapiente suscipit omnis. Molestiae ab culpa quam autem voluptatibus.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Lorem, ipsum dolor.</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi, harum sunt vero, rerum maxime esse voluptatum, deserunt ab neque expedita labore quasi blanditiis! Earum, illo neque recusandae consectetur enim iste dolores!
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

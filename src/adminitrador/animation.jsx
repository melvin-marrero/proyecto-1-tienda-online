import "../hojasDestilo/animationes.css"
export default function Animatione() {
    const valores=[
      {color:"blue",alto:50,name:"enero"},
      {color:"red",alto:70,name:"febrero"},
      {color:"olive",alto:90,name:"marzo"},
      {color:"yellow",alto:110,name:"abril"},
      {color:"green",alto:130,name:"mayo"},
      {color:"pink",alto:150,name:"junio"}
    ]

  return (
    <>
      <div className="container4 containerGrande">
        {valores.map((valor, i)=>
        <div key={i} className="barra4"
          style={{"--altura":`${valor.alto}px`,
          left:`${10+(i*50)}px`,
          backgroundColor:valor.color,
          }}>
          <h6>{valor.name}</h6>
        </div>
        )}
      </div>
    </>
  )
}
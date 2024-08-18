import "../hojasDestilo/carrusel.css"


export default function Carrusel(){
    return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner carusel-nombre">
           <div class="carousel-item active" data-bs-interval="5000">
              <p className="p-carrusel"><u>MarrerosoftwareCompanys</u></p>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <p className="p-carrusel">lo mejor en desarro <u>web avanzado</u> </p>
            </div>
        </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}
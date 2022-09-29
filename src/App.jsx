// importamos componentes 
  import Footer from "./componentes/Footer.jsx";
  import Header from "./componentes/Header.jsx";
  import Card from "./componentes/Card.jsx";

function App() {
  const titulo = "Galería de imagenes con React"; //definimos el titulo para enviarla como props a componente header

  const data = [   // definimos arreglo con data a ingresar como props en cards 
    {
      src: "https://images.unsplash.com/photo-1656494649244-cead1ed7c344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2t0b3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Mural de oficina.",
      desc: " Lorem ipsum dolor sit amet, consectetur. Perferendis explicabo consequatur molestias.",
    },
    {
      src: "https://images.unsplash.com/photo-1649119162006-304b172c12d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Planta de escritorio.",
      desc: " Lorem ipsum dolor sit amet, consicing elit. Perferendis explicabo consequatur molestias.",
    },
    {
      src: "https://images.unsplash.com/photo-1587749091230-fb8a034d695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2t0b3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Cargador inalambrico.",
      desc: " Lorem ipsum dolor sit amet, consectetur adipig elit. Perferendis explicabo consequatur molestias.",
    },
  ];
  return (
    <div className="App">
      <Header titulo={titulo} />
      {/* ingresamos el titulo como titulo al componente Header  */}
      <section className="galeria container d-flex">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <Card contenido={data[0]} />
             {/* enviamos el primer objeto del arreglo */}
          </div>
          <div className="col-sm-12 col-lg-4">
            <Card contenido={data[1]} />
          </div>
          <div className="col-sm-12 col-lg-4">
            <Card contenido={data[2]} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default App;

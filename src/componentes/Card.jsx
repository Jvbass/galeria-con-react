const Card = ({ contenido }) => { 
  // recibe como props un objeto definido en app.jsx
  return (
    <div className="card shadow mb-5">
      <img src={contenido.src} className="card-img-top" alt={contenido.title} />
      {/* tomamos las propiedades del objeto recibido como props  */}
      <div className="card-body">
        <h3 className="card-title h-color">{contenido.title}</h3>
        <p className="card-text">{contenido.desc}</p>
      </div>
    </div>
  );
};

export default Card;

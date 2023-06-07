function Mesero() {
  return (
    <>
    
      <div>
      <img src="imagenes/logoBurger.png" className="Logo" alt="logo"/>
      </div>
        <div>
          <form >
            <div>
              Nombre mesero:
            </div>

            <input
              id="inputMesa"
              placeholder="Numero de mesa"
              type="text"
              className="Numero de mesa"
              
            />
            <br/>
            <input
              id="InputClienta"
              placeholder="Nombre cliente"
              type="text"
              className="Nombre cliente"
            />
          </form>
          <form>
          <button type="submit" className="btn">
                        Mesas
                    </button>
          </form>
        </div>
        </>
  )
  }
  export default Mesero
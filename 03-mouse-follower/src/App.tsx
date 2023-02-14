import { useEffect, useState } from "react";
function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // UseEffect Dependencias
  // [] -> Solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> Se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> Se ejecuta cada vez que se renderiza el componente

  //Pointer move
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Método de limpieza del efecto;
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  //Change body className
  useEffect(()=>{
    document.body.classList.toggle("no-cursor", enabled);
    return ()=>{
      document.body.classList.remove("no-cursor");
    }
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;

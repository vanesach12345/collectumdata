export default function Home() {
  const url = "https://www.collectumdata.com";

  return (
    <div className="w-full bg-lightgreen relative overflow-x-hidden min-h-[100dvh]">
      <div className="mx-auto w-full max-w-7xl px-10 pt-16 pb-28 flex flex-col items-center text-center">
        <img
          src="/images/logo.png"
          alt="Collectum Datos Panel"
          className="h-[81px] w-auto"
        />

        <h1
          style={{ fontFamily: "Paytone One, sans-serif" }}
          className="mt-12 text-[36px] sm:text-[80px] font-extrabold text-black"
        >
          ¡Visita nuestro nuevo website!
        </h1>

        {/* Texto: 18px en mobile */}
        <p className="mt-8 text-[18px] sm:text-[40px] text-black leading-relaxed max-w-5xl">
          Este año actualizamos nuestra plataforma 🎉. Participa, responde
          encuestas y sigue ganando premios.
          <br />
          Te esperamos en 👉
        </p>

        {/* Link: 18px en mobile */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "Paytone One, sans-serif" }}
          className="mt-16 font-extrabold text-green hover:underline
                     text-[22px] sm:text-[80px] leading-none
                     inline-block w-full max-w-full break-all"
        >
          www.collectumdata.com
        </a>
      </div>

      <img
        src="/images/moving.png"
        alt=""
        className="absolute bottom-0 right-[120px] h-18 w-auto"
      />
    </div>
  );
}

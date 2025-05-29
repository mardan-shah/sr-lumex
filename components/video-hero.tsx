const VideoHero = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/video/transparent-led-film.mp4"
          autoPlay
          loop
          muted
          className="min-w-full min-h-full absolute object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative pt-36 pb-24 md:pt-48 md:pb-32 lg:pt-60 lg:pb-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Transforming Spaces with Transparent LED Film
        </h1>
        {/* Removed paragraph here */}
        <a
          href="#contact"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Request a Quote
        </a>
      </div>
    </section>
  )
}

export default VideoHero

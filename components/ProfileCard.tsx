export default function ProfileCard() {
  return (
    <div
      className="w-[80%] max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r 
    from-emerald-300 via-teal-400 to-blue-400 flex flex-col md:flex-row items-center gap-8 mt-6"
    >
      <img
        src="/avatar.png"
        alt="Profile"
        className="w-32 h-32 rounded-full object-contain"
      />
      <div className="text-white text-center md:text-left text-justify">
        <h1 className="text-2xl font-bold mb-4">
          Hello, World! Welcome to My Portfolio
        </h1>
        <hr />
        <p className="text-sm leading-relaxed">
          I am Joshua Pacho from Isabela, Philippines, a dedicated developer
          with a foundation in Computer Programming from Isabela State
          University. My tech journey is characterized by a blend of front-end
          and back-end development, optimizing systems to improve user
          experience and operational efficiency. I am passionate about
          technology and its impact on daily life, I strive to integrate
          seamless tech experiences in diverse environments. Let's connect and
          explore how we can drive technology forward together!
        </p>
      </div>
    </div>
  );
}

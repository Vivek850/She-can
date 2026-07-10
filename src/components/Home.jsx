export default function Home() {
  return (
    <>
      <div className="home-container bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png')] bg-cover bg-center h-screen flex flex-col justify-center text-white">
        <div className="home-content mx-45 mt-50 ">
          {/* <h1 className="text-8xl font-bold">Together We can change</h1> */}
          <h1 className="text-8xl font-bold">Let's make this world a</h1>
          {/* <h1 className="text-8xl font-bold text-red-500">THE WORLD</h1> */}
          <h1 className="text-8xl font-bold text-red-500"> BETTER PLACE </h1>

          <p className="text-lg mt-6">It doesn’t take much to make a difference </p>
          <p className="text-lg">-— share your time, your talent, or your treasure, and be part of the change.</p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 mt-3 ml-5">Support Us</button>
        </div>
      </div>
    </>
  );
}

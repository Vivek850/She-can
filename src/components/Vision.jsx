export default function Vision() {
  return (
    <>
      <div className="flex  h-screen w-full">
        <div className=" w-3/5 h-full overflow-hidden relative z-[-10] flex justify-end">
          <img
            className="w-[30em] object-cover absolute top-[-250px] z-[-10]"
            alt=""
            src="https://assets.zyrosite.com/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg"
          />
        </div>
        <div className=" w-3/5 p-10 pl-20 flex flex-col justify-center  pt-40">
          <h1 className="text-7xl font-bold">Global Vision,</h1>
          <h1 className="text-7xl font-bold text-red-500">Local Action</h1>
          <h3 className="text-2xl font-bold pt-3">
            The She Can Foundation Story
          </h3>
          <p className="text-lg w-[80%] pt-3 text-[17px]">
            We are She Can Foundation, a non-governmental organization
            registered under the Indian Society Act, 1860, dedicated to
            empowering women and creating a more equitable society. We provide
            support, resources, and training to women in communities across the
            globe, working closely with local organizations, governments, and
            communities to ensure that our programs are effective and
            sustainable. Through advocacy campaigns and initiatives, we raise
            awareness of women's issues. We rely on the support of individuals,
            corporations, and other organizations to achieve our vision. We
            believe that by working together, we can revolutionize society and
            create a better world for all.
          </p>
          <div className="mt-5">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
              know More
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 ml-4">
              Our Recognition
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-2-YD0rJbvp3nSz7Dvz.png')] bg-cover bg-center h-screen flex flex-col justify-center items-center  text-white">
                <div className="text-7xl font-bold">Turn kindness into change</div>
                <div className="text-2xl mt-4">with</div>
                <div className="text-7xl font-bold mt-4 text-red-500">She Can Foundation</div>
                <div className="text-2xl mt-4">NGO Registered Under the Indian Society Act, 1860</div>
      </div>
      <div className="flex  h-screen w-full">
      <div className=" w-3/5 h-full overflow-hidden relative z-[-10] flex justify-end">
          <img
            className="w-[37em] object-cover absolute top-[-10px] z-[-10]"
            alt=""
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png"
          />
        </div>
        <div className=" w-3/5 p-10 pl-20 flex flex-col justify-center  pt-40">
          <h1 className="text-7xl font-bold">Join</h1>
          <h1 className="text-7xl font-bold text-red-500">Our Team</h1>

          <p className="text-lg w-[80%] pt-3 text-[17px]">
            "Join our team and make a difference in the lives of women in need. At She Can Foundation, we are committed to creating positive change and empowering women in communities across the globe. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact in the lives of women. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is dedicated to creating a more equitable society, one woman at a time."
          </p>
          <div className="mt-5">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
                Join Us
            </button>
          </div>
          </div>
        </div>
        <div className ="w-full bg-stone-900 p-10 flex flex-col justify-center items-center text-center text-white">
            <p className="w-[70%] text-5xl pt-20">"Together, we can break down barriers and empower women. At She Can Foundation, we believe that if we all do our part, there is no challenge too great to overcome. Join us in our mission to create a world where every woman has the opportunity to thrive and succeed."</p>
            <p className="text-2xl font-bold pt-10 text-red-500">REETA MISHRA</p>
            <p className="pb-20">Founder & President, She Can Foundation</p>
        </div>
    </>
  );
}

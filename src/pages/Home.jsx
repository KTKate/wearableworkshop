const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to [COMPANY_NAME] HR Portal
        </h1>
        <p className="text-xl text-gray-600">
          Your gateway to company resources and support
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To create an inclusive, innovative, and empowering workplace where every
          team member can thrive, grow, and contribute to our collective success.
          We are committed to fostering a culture of excellence, collaboration, and
          continuous improvement.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600">
              We conduct ourselves with honesty, transparency, and ethical
              behavior in all our interactions.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace creativity, encourage new ideas, and continuously seek
              better ways to solve problems.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Collaboration
            </h3>
            <p className="text-gray-600">
              We work together across teams, share knowledge, and support each
              other to achieve common goals.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              We strive for the highest quality in everything we do and
              continuously improve our skills and processes.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Respect
            </h3>
            <p className="text-gray-600">
              We value diversity, treat everyone with dignity, and create an
              inclusive environment for all.
            </p>
          </div>
          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accountability
            </h3>
            <p className="text-gray-600">
              We take ownership of our work, deliver on our commitments, and
              learn from our experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

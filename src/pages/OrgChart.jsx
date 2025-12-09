const OrgChart = () => {
  const orgData = {
    ceo: {
      name: "Amparo Maria Folch",
      title: "CEO / Founder",
      color: "bg-amber-800"
    },
    executives: [
      {
        name: "Anthony Cocuzza",
        title: "CTO (Technology)",
        color: "bg-yellow-800",
        team: [
          {
            name: "Chanchal Saha",
            title: "Engineering Lead",
            color: "bg-amber-600"
          }
        ]
      },
      {
        name: "Kate Yzurdiaga",
        title: "CMO (Marketing)",
        color: "bg-orange-800",
        team: [
          {
            name: "Brian Lee",
            title: "Social Media / Growth",
            color: "bg-orange-600"
          }
        ]
      }
    ],
    staff: [
      {
        name: "Kate Terraccino",
        title: "Product Manager",
        color: "bg-amber-700"
      },
      {
        name: "Nathan Lavertue",
        title: "UI/UX Designer",
        color: "bg-yellow-700"
      }
    ]
  };

  const PersonCard = ({ name, title, color, size = "normal" }) => (
    <div className={`${color} text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
      size === "large" ? "px-8 py-6" : "px-6 py-4"
    }`}>
      <h3 className={`font-bold ${size === "large" ? "text-xl" : "text-lg"}`}>
        {name}
      </h3>
      <p className={`${size === "large" ? "text-base" : "text-sm"} mt-1 opacity-90`}>
        {title}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Organizational Chart
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white px-8 py-4 rounded-lg shadow-md">
              <img src="/hormoniq-logo.svg" alt="HormonIQ" className="h-12" />
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Leadership & Team Structure
          </p>
        </div>

        {/* Org Chart */}
        <div className="space-y-12">
          {/* CEO Level */}
          <div className="flex justify-center">
            <div className="w-80">
              <PersonCard
                name={orgData.ceo.name}
                title={orgData.ceo.title}
                color={orgData.ceo.color}
                size="large"
              />
            </div>
          </div>

          {/* Connector Line from CEO */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-amber-300"></div>
          </div>

          {/* Executive Level */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-amber-300 transform -translate-y-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {orgData.executives.map((exec, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Vertical connector */}
                  <div className="w-1 h-8 bg-amber-300 mb-0"></div>

                  {/* Executive Card */}
                  <div className="w-72">
                    <PersonCard
                      name={exec.name}
                      title={exec.title}
                      color={exec.color}
                    />
                  </div>

                  {/* Team Members under Executive */}
                  {exec.team && exec.team.length > 0 && (
                    <>
                      <div className="w-1 h-8 bg-amber-300 mt-4"></div>
                      <div className="space-y-4 mt-4">
                        {exec.team.map((member, memberIdx) => (
                          <div key={memberIdx} className="w-72">
                            <PersonCard
                              name={member.name}
                              title={member.title}
                              color={member.color}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Staff */}
          <div className="relative mt-16">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="w-1 h-8 bg-amber-300 mx-auto"></div>
                <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-8">
                  Core Team
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {orgData.staff.map((person, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-72">
                    <PersonCard
                      name={person.name}
                      title={person.title}
                      color={person.color}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md px-8 py-6 inline-block">
            <p className="text-gray-600 text-sm">
              Total Team Members: <span className="font-bold text-gray-900">7</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Last Updated: December 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;

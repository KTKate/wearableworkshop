const Policies = () => {
  const policies = [
    {
      id: "code-of-conduct",
      title: "Code of Conduct",
      summary: "Guidelines for professional behavior and ethics",
      content: "All employees are expected to conduct themselves professionally, treat colleagues with respect, and maintain the highest ethical standards. This includes honesty in all business dealings, respect for diversity, and adherence to all company policies and applicable laws."
    },
    {
      id: "time-off-and-leave",
      title: "Time Off and Leave",
      summary: "Vacation, sick leave, and other time off policies",
      content: "Employees accrue vacation time based on tenure and role. Sick leave is available for health-related absences. Additional leave types include parental leave, bereavement leave, and personal days. All time off must be requested through the HR system and approved by your manager."
    },
    {
      id: "remote-work-policy",
      title: "Remote Work Policy",
      summary: "Guidelines for working from home and flexible arrangements",
      content: "Employees may work remotely up to 3 days per week with manager approval. Remote workers must maintain availability during core business hours, ensure a suitable work environment, and meet all performance expectations. Equipment and internet stipends are provided as needed."
    },
    {
      id: "professional-development",
      title: "Professional Development",
      summary: "Training, education, and career growth opportunities",
      content: "The company supports continuous learning through training budgets, conference attendance, online courses, and mentorship programs. Employees are encouraged to discuss development goals with their managers and create personalized growth plans."
    },
    {
      id: "data-security-and-privacy",
      title: "Data Security and Privacy",
      summary: "Protecting company and customer information",
      content: "All employees must protect sensitive company and customer data. This includes using strong passwords, encrypting sensitive information, following clean desk policies, and reporting security incidents immediately. Violation of security policies may result in disciplinary action."
    },
    {
      id: "diversity-and-inclusion",
      title: "Diversity and Inclusion",
      summary: "Our commitment to an inclusive workplace",
      content: "We are committed to creating a diverse and inclusive workplace where everyone feels valued and respected. Discrimination or harassment based on race, gender, age, religion, disability, sexual orientation, or any other protected characteristic is strictly prohibited."
    },
    {
      id: "health-and-safety",
      title: "Health and Safety",
      summary: "Workplace safety standards and procedures",
      content: "Employee safety is our top priority. All team members must follow safety protocols, report hazards immediately, and participate in safety training. Emergency procedures are posted throughout the office, and regular drills are conducted."
    },
    {
      id: "performance-reviews",
      title: "Performance Reviews",
      summary: "Evaluation process and feedback cycles",
      content: "Formal performance reviews are conducted annually, with informal check-ins quarterly. Reviews assess goal achievement, competencies, and development areas. Employees are encouraged to prepare self-assessments and discuss career aspirations during review meetings."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Company Policies
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Important policies and guidelines for all employees
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <p className="text-blue-700">
          These policies apply to all employees and are regularly updated. Please
          review them carefully and contact HR if you have any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {policies.map((policy) => (
                <a
                  key={policy.id}
                  href={`#${policy.id}`}
                  className="block text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors"
                >
                  {policy.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Policy Content */}
        <div className="lg:col-span-3 space-y-8">
          {policies.map((policy) => (
            <section
              key={policy.id}
              id={policy.id}
              className="bg-white rounded-lg shadow-md p-6 scroll-mt-4"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {policy.title}
              </h2>
              <p className="text-gray-600 italic mb-4">{policy.summary}</p>
              <p className="text-gray-700 leading-relaxed">
                {policy.content}
              </p>
            </section>
          ))}

          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Questions About Policies?
            </h2>
            <p className="text-gray-600">
              Contact the HR department at hr@hormoniq.com or visit the HR office for
              clarification on any policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;

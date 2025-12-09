import { useState } from 'react';

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const policies = [
    {
      id: 1,
      title: "Code of Conduct",
      summary: "Guidelines for professional behavior and ethics",
      content: "All employees are expected to conduct themselves professionally, treat colleagues with respect, and maintain the highest ethical standards. This includes honesty in all business dealings, respect for diversity, and adherence to all company policies and applicable laws."
    },
    {
      id: 2,
      title: "Time Off and Leave",
      summary: "Vacation, sick leave, and other time off policies",
      content: "Employees accrue vacation time based on tenure and role. Sick leave is available for health-related absences. Additional leave types include parental leave, bereavement leave, and personal days. All time off must be requested through the HR system and approved by your manager."
    },
    {
      id: 3,
      title: "Remote Work Policy",
      summary: "Guidelines for working from home and flexible arrangements",
      content: "Employees may work remotely up to 3 days per week with manager approval. Remote workers must maintain availability during core business hours, ensure a suitable work environment, and meet all performance expectations. Equipment and internet stipends are provided as needed."
    },
    {
      id: 4,
      title: "Professional Development",
      summary: "Training, education, and career growth opportunities",
      content: "The company supports continuous learning through training budgets, conference attendance, online courses, and mentorship programs. Employees are encouraged to discuss development goals with their managers and create personalized growth plans."
    },
    {
      id: 5,
      title: "Data Security and Privacy",
      summary: "Protecting company and customer information",
      content: "All employees must protect sensitive company and customer data. This includes using strong passwords, encrypting sensitive information, following clean desk policies, and reporting security incidents immediately. Violation of security policies may result in disciplinary action."
    },
    {
      id: 6,
      title: "Diversity and Inclusion",
      summary: "Our commitment to an inclusive workplace",
      content: "We are committed to creating a diverse and inclusive workplace where everyone feels valued and respected. Discrimination or harassment based on race, gender, age, religion, disability, sexual orientation, or any other protected characteristic is strictly prohibited."
    },
    {
      id: 7,
      title: "Health and Safety",
      summary: "Workplace safety standards and procedures",
      content: "Employee safety is our top priority. All team members must follow safety protocols, report hazards immediately, and participate in safety training. Emergency procedures are posted throughout the office, and regular drills are conducted."
    },
    {
      id: 8,
      title: "Performance Reviews",
      summary: "Evaluation process and feedback cycles",
      content: "Formal performance reviews are conducted annually, with informal check-ins quarterly. Reviews assess goal achievement, competencies, and development areas. Employees are encouraged to prepare self-assessments and discuss career aspirations during review meetings."
    }
  ];

  const togglePolicy = (id) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

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

      <div className="space-y-4">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => togglePolicy(policy.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {policy.title}
                </h2>
                <p className="text-gray-600 mt-1">{policy.summary}</p>
              </div>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform ${
                  expandedPolicy === policy.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedPolicy === policy.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {policy.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Questions About Policies?
        </h2>
        <p className="text-gray-600">
          Contact the HR department at hr@company.com or visit the HR office for
          clarification on any policy.
        </p>
      </div>
    </div>
  );
};

export default Policies;

const Onboarding = () => {
  const onboardingSteps = [
    {
      title: "Week 1: Getting Started",
      tasks: [
        "Complete HR paperwork and documentation",
        "Set up your workstation and accounts",
        "Meet your team and manager",
        "Review company handbook and policies",
        "Complete mandatory compliance training"
      ]
    },
    {
      title: "Week 2: Learning the Ropes",
      tasks: [
        "Shadow team members to understand workflows",
        "Attend department overview meetings",
        "Complete role-specific training modules",
        "Set up one-on-ones with key stakeholders",
        "Review your first 90-day goals"
      ]
    },
    {
      title: "Week 3-4: Taking Ownership",
      tasks: [
        "Start contributing to team projects",
        "Attend relevant team meetings and stand-ups",
        "Complete additional training as needed",
        "Schedule 30-day check-in with manager",
        "Build relationships across departments"
      ]
    },
    {
      title: "Month 2-3: Growing Your Impact",
      tasks: [
        "Take on independent projects and responsibilities",
        "Seek feedback and implement improvements",
        "Contribute ideas in team discussions",
        "Complete 60-day and 90-day reviews",
        "Reflect on achievements and areas for growth"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Onboarding Guide
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Your roadmap to success in your first 90 days
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          Welcome to the Team!
        </h2>
        <p className="text-blue-700">
          We're excited to have you here. This guide will help you navigate your
          first three months and set you up for long-term success. Remember, your
          manager and HR team are here to support you every step of the way.
        </p>
      </div>

      <div className="space-y-6">
        {onboardingSteps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {step.title}
            </h2>
            <ul className="space-y-3">
              {step.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">
          Need Help?
        </h2>
        <p className="text-yellow-700">
          Don't hesitate to reach out to your manager or HR representative if you
          have questions or need assistance. We're here to help you succeed!
        </p>
      </div>
    </div>
  );
};

export default Onboarding;

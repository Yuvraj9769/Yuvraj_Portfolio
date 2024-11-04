const Experience = () => {
  return (
    <div className="w-full h-auto px-2 py-1 my-5 flex flex-col gap-3 ">
      <p className="text-red-600  relative text-xl xl:after:h-[2px] xl:before:h-[2px] text-center xl:text-2xl before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0">
        Experiences
      </p>
      <div className="h-auto text-slate-50 flex flex-col lg:flex-row justify-between items-center gap-4 py-2">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Internship Experience
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Inkpot Digital
            </h3>
            <p className="text-gray-600">Web Developer Intern</p>
            <p className="text-sm text-gray-500">Duration: 4 Months</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-medium text-gray-700">
              Key Responsibilities:
            </h4>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Worked on HTML, CSS, JavaScript, and React projects.</li>
              <li>
                Contributed to the development of the company&apos;s website.
              </li>
              <li>
                Assisted in creating a project management tool using React.
              </li>
              <li>
                Collaborated with the team to improve user experience and
                functionality.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

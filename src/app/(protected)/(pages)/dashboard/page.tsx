const DashBoardPage = async () => {
  return (
    <div className=" w-full flex flex-col gap-6 relative">
      <div className=" flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className=" flex flex-col items-start">
          <h1 className=" text-2xl font-semibold dark:text-primary backdrop-blur-0">
            Projects
          </h1>
          <p className=" text-base font-normal dark:text-gray-600">
            All your projects in one place
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div id="features" className="bg-[#1A1A1A] p-4 items-center justify-center w-full sm:py-14 xl:py-20 flex gap-8 sm:gap-4 flex-col">
      <div className="flex flex-col sm:gap-1 sm:p-10 items-center justify-center">
        <h1 className="bg-[#512B81] font-medium text-white rounded-full p-1 px-4 mb-2 ring-1">FEATURES</h1>
        <h1 className="text-[20px] pt-4 sm:p-0 font-semibold sm:text-[20px] md:text-[25px] xl:text-[25px] 2xl:text-[35px] text-white">
          Get All Advantages
        </h1>
        <p className="text-sm font-semibold sm:text-base text-center text-gray-400">
          We can provide advantages that can simplify your financial planning
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-8 sm:gap-4 pb-10">
        <FeatureCard
          cardTitleSvg={"/svg/robot.svg"}
          CardTitleText="Robo-Advisory"
          cardDescriptionText="Automated investment advice based on user’s financial goals, risk tolerance, and current financial status."
        />
        <FeatureCard
          cardTitleSvg={"/svg/robot.svg"}
          CardTitleText="Robo-Advisory"
          cardDescriptionText="Automated investment advice based on user’s financial goals, risk tolerance, and current financial status."
        />
        <FeatureCard
          cardTitleSvg={"/svg/robot.svg"}
          CardTitleText="Robo-Advisory"
          cardDescriptionText="Automated investment advice based on user’s financial goals, risk tolerance, and current financial status."
        />
      </div>
    </div>
  );
}

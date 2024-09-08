"use client";
import RatingStars from "./ratingstars";
import ProgressBar from "./progressbar";

interface RatingsBreakdownProps {
  accentColor?: string;
  oneStars: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;
  title?: string;
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({
  accentColor = "#F8CC38",
  oneStars,
  twoStars,
  threeStars,
  fourStars,
  fiveStars,
  title = "Customer Reviews",
}) => {
  const totalRatings = oneStars + twoStars + threeStars + fourStars + fiveStars;
  const weightedSum =
    oneStars * 1 +
    twoStars * 2 +
    threeStars * 3 +
    fourStars * 4 +
    fiveStars * 5;

  const average = totalRatings ? (weightedSum / totalRatings).toFixed(1) : 0;

  const calculatePercentage = (stars: number) =>
    totalRatings ? ((stars / totalRatings) * 100).toFixed(0) : 0;

  return (
    <div className="flex flex-col w-full h-full bg-dark-primary rounded-lg p-4 text-xs sm:text-sm md:text-base outline outline-1 outline-dark-secondary">
      <div className="flex flex-col items-center rounded-full text-paragraph-primary pb-4 gap-y-2">
        <p className=" px-4">{title}</p>
        <div className="flex flex-row justify-center items-center gap-2 px-3 py-1 rounded-full bg-gray-secondary text-paragraph-primary outline outline-1 outline-dark-secondary">
          <RatingStars
            rating={Number(average)}
            clickable={false}
            starColor={accentColor}
          />
          <p className="text-paragraph-secondary text-sm">{average} out of 5</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center gap-2 text-paragraph-primary ">
          <div className="flex flex-col items-center gap-2 w-min">
            <p className="text-xs whitespace-nowrap">5 Stars</p>
            <p className="text-xs whitespace-nowrap">4 Stars</p>
            <p className="text-xs whitespace-nowrap">3 Stars</p>
            <p className="text-xs whitespace-nowrap">2 Stars</p>
            <p className="text-xs whitespace-nowrap">1 Stars</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {[fiveStars, fourStars, threeStars, twoStars, oneStars].map(
              (stars, index) => (
                <ProgressBar
                  key={index}
                  progress={Number(calculatePercentage(stars))}
                  progressBarColor={accentColor}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsBreakdown;

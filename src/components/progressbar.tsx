"use client";

interface ProgressBarProps {
  progress: number;
  progressBarColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, progressBarColor = "#ffc978" }) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  // Determine width as a string for styling with a minimum width
  const progressBarWidth = clampedProgress < 5 ? "5%" : `${clampedProgress}%`;
  const minWidth = clampedProgress < 10 ? "10%" : progressBarWidth; // Set minimum width

  return (
    <div className="relative flex items-center w-full bg-gray-200 rounded-full h-4">
      <div
        className="h-4 rounded-full"
        style={{ width: minWidth, backgroundColor: progressBarColor }} // Use minWidth here
      ></div>
      <p className="absolute right-0 text-[0.5rem] mr-1.5 text-gray-500">
        {`${clampedProgress}%`}
      </p>
    </div>
  );
};

export default ProgressBar;
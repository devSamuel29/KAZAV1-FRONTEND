interface ProgressBarProps {
  progressPercentage: number
}

export function ProgressBar({ progressPercentage }: ProgressBarProps): JSX.Element {
  if (progressPercentage === 1) {
    progressPercentage = 0
  } else {
    progressPercentage = progressPercentage * 33.33
  }
  return (
    <div className="h-3 w-full rounded-md bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full rounded-md bg-primary"
      ></div>
    </div>
  )
}

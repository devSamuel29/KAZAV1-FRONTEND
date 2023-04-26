interface ProgressBarProps {
  progressPercentage: number
}

export function ProgressBar({ progressPercentage }: ProgressBarProps): JSX.Element {
  const progressArrayPercentage = [0, 33.33, 66.66, 100]
  const progressIndex = progressPercentage - 1
  const width = progressArrayPercentage[progressIndex]

  return (
    <div className="transition-width mb-3 h-3 w-full rounded-md bg-gray-300">
      <div
        style={{ width: `${width}%` }}
        className="h-full rounded-md bg-primary duration-500 ease-in-out"
      ></div>
    </div>
  )
}

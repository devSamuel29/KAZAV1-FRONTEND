interface ProgressBarProps {
  progressPercentage: number
}

export function ProgressBar({ progressPercentage }: ProgressBarProps): JSX.Element {
  return (
    <div className="h-3 w-full rounded-md bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 70 ? 'bg-primary' : 'bg-green-600'
        } rounded-md`}
      ></div>
    </div>
  )
}

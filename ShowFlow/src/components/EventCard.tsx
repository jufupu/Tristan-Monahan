import { Clock, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  time: string
  duration: string
  location: string
  date: string
  participants: string[]
  variant: "purple" | "teal"
}

export function EventCard({ title, time, duration, location, date, participants, variant }: EventCardProps) {
  const bgColor = variant === "purple" ? "bg-[#ae81cd]" : "bg-[#5dd9c1]"

  return (
    <div className={`${bgColor} rounded-xl p-4 text-white`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{duration}</p>

      <div className="flex gap-4 mb-6">
        {participants.map((participant, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center
              ${participant === "P" ? "bg-[#f68ca0]" : "bg-[#f7ba8c]"}`}
          >
            {participant}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  )
}

 
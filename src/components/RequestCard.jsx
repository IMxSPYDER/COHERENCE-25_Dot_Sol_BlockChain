import { ShieldCheck, XCircle } from "lucide-react"

export function RequestCard({ request }) {
  const handleAccept = () => {
    alert(`Accepted request from ${request.organization}`)
    // You can trigger blockchain approval here
  }

  const handleReject = () => {
    alert(`Rejected request from ${request.organization}`)
    // You can trigger rejection logic here
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold">{request.organization || "Organization Name"}</h3>
        <p className="text-sm text-gray-500">Requested: {request.credential || "Credential Name"}</p>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          onClick={handleAccept}
          className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
        >
          <ShieldCheck className="h-4 w-4" />
          Accept
        </button>
        <button
          onClick={handleReject}
          className="flex items-center gap-1 rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          <XCircle className="h-4 w-4" />
          Reject
        </button>
      </div>
    </div>
  )
}

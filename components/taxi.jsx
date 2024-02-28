import { Button } from "@/components/ui/button"

export function Taxi() {
  return (
    (<Button variant="outline">Get to there<CarTaxiFrontIcon className="ml-2 h-4 w-4" />
    </Button>)
  );
}


function CarTaxiFrontIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 2h4" />
      <path
        d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </svg>)
  );
}

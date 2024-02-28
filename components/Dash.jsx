import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Taxi } from "./taxi";

export function Dash() {
  return (
    (<div
      className="px-4  mx-auto max-w-7xl w-full grid gap-8 lg:px-6 lg:grid-cols-2 xl:grid-cols-4">
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-16/9 rounded-lg overflow-hidden">
          <img
            alt="Image 01"
            className="object-cover group-hover:scale-105 transition-transform"
            height={225}
            src="hassan_33-min.jpeg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Hassan</CardTitle>
              <CardDescription>The Hassan Mosque in Rabat, Morocco, is a historical site known for its unfinished but iconic Hassan Tower, a remnant of a grand mosque project from the 12th century.</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
              <Taxi />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-16/9 rounded-lg overflow-hidden">
          <img
            alt="Image 02"
            className="object-cover group-hover:scale-105 transition-transform"
            height={225}
            src="kasbah.jpeg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Challah</CardTitle>
              <CardDescription>Chellah in Rabat is a serene historical site blending Roman and Islamic ruins with vibrant gardens, known for its ancient charm and nesting storks.</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
              <Taxi />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

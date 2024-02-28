import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Onboard Shopping</CardTitle>
              <CardDescription>Shop duty-free items</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
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
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Onboard Shopping</CardTitle>
              <CardDescription>Shop duty-free items</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-16/9 rounded-lg overflow-hidden">
          <img
            alt="Image 03"
            className="object-cover group-hover:scale-105 transition-transform"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Onboard Shopping</CardTitle>
              <CardDescription>Shop duty-free items</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <div className="aspect-16/9 rounded-lg overflow-hidden">
          <img
            alt="Image 04"
            className="object-cover group-hover:scale-105 transition-transform"
            height={225}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width={400} />
        </div>
        <div className="bg-gray-50 p-4 dark:bg-gray-800">
          <Card className="overflow-visible shadow-none">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-medium">Onboard Shopping</CardTitle>
              <CardDescription>Shop duty-free items</CardDescription>
            </CardContent>
            <CardContent className="p-4 flex items-center justify-between">
              <Button size="none" variant="ghost">
                View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

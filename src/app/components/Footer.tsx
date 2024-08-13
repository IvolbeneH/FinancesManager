import { Card, CardContent } from "./ui/card";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Card className="rounded-none bg-zinc-50">
        <CardContent className="px-5 py-6">
          <span className="text-gray-500">
            © {date} Copyright{" "}
            <span className="font-bold text-zinc-600">Finance Manager</span>
          </span>
        </CardContent>
      </Card>
    </footer>
  );
}

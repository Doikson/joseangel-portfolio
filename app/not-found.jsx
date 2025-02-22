import { redirect } from "next/navigation";

export default function CatchAllPage() {
  redirect("/404"); // Redirects unknown routes to /404
}

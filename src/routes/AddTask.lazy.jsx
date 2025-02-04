import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/AddTask")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <h1 className="text-3xl font-bold">Add New Task</h1>
      <form action=""></form>
    </div>
  );
}

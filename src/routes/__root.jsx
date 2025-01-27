import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import '../CSS/home.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </nav>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
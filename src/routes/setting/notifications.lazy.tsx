import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/setting/notifications')({
  component: () => <div>Hello /setting/notifications!</div>
})
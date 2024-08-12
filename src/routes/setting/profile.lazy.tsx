import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/setting/profile')({
  component: () => <div>Hello /setting/profile!</div>
})
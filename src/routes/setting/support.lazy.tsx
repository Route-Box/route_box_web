import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/setting/support')({
  component: () => <div>Hello /setting/support!</div>
})
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/setting/terms')({
  component: () => <div>Hello /setting/terms!</div>
})
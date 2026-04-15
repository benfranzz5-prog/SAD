import { redirect } from 'next/navigation'

// Redirect old /about path to home
export default function AboutPage() {
  redirect('/')
}

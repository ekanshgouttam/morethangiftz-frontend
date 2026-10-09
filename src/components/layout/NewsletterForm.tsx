import { useId, useState, type FormEvent } from 'react'

type Status = 'idle' | 'error' | 'success'

export function NewsletterForm() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
    setStatus(valid ? 'success' : 'error')
    if (valid) setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={id} className="font-display text-xl">Stay updated - subscribe for the latest news and offers!</label>
      <div className="mt-3 flex">
        <input
          id={id}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder="Your email…"
          autoComplete="email"
          aria-invalid={status === 'error'}
          aria-describedby={`${id}-msg`}
          className="min-w-0 flex-1 border border-white bg-black px-4 py-3 text-base text-white placeholder:text-white/60 focus:bg-white/10"
        />
        <button type="submit" className="bg-white px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-surface sm:px-8">
          Subscribe
        </button>
      </div>
      <p id={`${id}-msg`} role="status" className="mt-2 min-h-5 text-sm">
        {status === 'error' && <span className="text-red-300">Please enter a valid email address.</span>}
        {status === 'success' && <span className="text-green-300">Thanks! (Demo only — no email was actually sent.)</span>}
      </p>
    </form>
  )
}
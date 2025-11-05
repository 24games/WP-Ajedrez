import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /.+@.+\..+/
    
    if (!emailRegex.test(email.trim())) {
      setMessage('Informe um e-mail válido.')
      setMessageType('error')
      return
    }

    const key = 'newsletter-subs'
    const subs = JSON.parse(localStorage.getItem(key) || '[]')
    if (!subs.includes(email.trim())) {
      subs.push(email.trim())
    }
    localStorage.setItem(key, JSON.stringify(subs))
    
    setMessage('Obrigado! Você está inscrito.')
    setMessageType('success')
    setEmail('')
    
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Receba novidades de xadrez
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Inscreva-se e receba dicas semanais, artigos e partidas comentadas.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                aria-label="Seu melhor e-mail"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-gold to-accent text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Inscrever
              </button>
            </div>
            {message && (
              <p className={`text-sm ${messageType === 'error' ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}


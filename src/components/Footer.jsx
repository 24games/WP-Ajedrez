import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ♛ Ajedrez <span className="text-gold">Brillante</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Estrategia, aprendizaje y diversión en un solo lugar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="/politicas.html" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Política de Privacidad</a></li>
              <li><a href="/termos.html" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Términos de Uso</a></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">© {currentYear} Ajedrez Brillante</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <strong>Aviso:</strong> Este sitio es únicamente informativo y educativo. No hay ganancia financiera, monetización o cualquier forma de ingresos asociada a este proyecto. Todo el contenido se proporciona gratuitamente para fines de aprendizaje y entretenimiento.
          </p>
        </div>
      </div>
    </footer>
  )
}


export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div></div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            {' '}
            {/* para colocar width específico; leading-relaxed: propriedade mais relaxada; é o line-height igual a 1.625, que é ideal para melhor legibilidade de textos corridos */}
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href=""> criar agora!</a>
          </p>
        </div>
      </div>
    </main>
  )
}

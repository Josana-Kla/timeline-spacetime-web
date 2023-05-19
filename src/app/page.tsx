export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-starts.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-starts.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            {' '}
            {/* para colocar width específico; leading-relaxed: propriedade mais relaxada; é o line-height igual a 1.625, que é ideal para melhor legibilidade de textos corridos */}
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              {' '}
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

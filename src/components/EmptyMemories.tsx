export function EmptyMemories() {
  return (
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
  )
}

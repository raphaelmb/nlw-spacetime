export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You have not registered a memory yet,{' '}
        <a href="" className="underline hover:text-gray-50">
          create one now
        </a>
        !
      </p>
    </div>
  )
}

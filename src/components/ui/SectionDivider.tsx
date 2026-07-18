interface SectionDividerProps {
  variant?: 'gold' | 'ornament'
}

export default function SectionDivider({ variant = 'ornament' }: SectionDividerProps) {
  if (variant === 'gold') {
    return <div className="divider-gold my-16 mx-auto max-w-xs" />
  }

  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <path d="M12 2L13.5 9.5L21 8L15.5 13.5L20 20L12 17L4 20L8.5 13.5L3 8L10.5 9.5L12 2Z" fill="rgba(201,168,76,0.6)" />
      </svg>
      <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
    </div>
  )
}

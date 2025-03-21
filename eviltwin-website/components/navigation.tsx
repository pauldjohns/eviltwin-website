import Link from 'next/link'

const navItems = [
  'ABOUT',
  '-> AI OR DIE',
  'CONTRADICTIONS',
  'GLUE GUYS',
  'DEMANDING AND SUPPORTIVE',
  'THE CONFRONTATION OBLIGATION',
  'FRIENDSHIP',
  'GETTING BETTER AT GETTING BETTER',
  'THANK YOU, INSTACART',
  'FLOWERS & LEADERSHIP',
  'THE REAL COMPETITION IS THE WATER',
  'PLAY FOR THE FRONT OF THE JERSEY',
  'HIRING: WHY MORE IS OFTEN LESS',
  'A CHANCE TO BECOME ANTI-FRAGILE',
  'YOU ARE WHAT YOUR RECORD SAYS YOU ARE',
  'SADNESS & GRATITUDE & BASKETBALL',
  'DESPERATION-INDUCED FOCUS',
  'JOY & COMPETITIVENESS & CULTURE',
  'ENTHUSIASTICALLY REHIRING',
  'WRITING'
]

export default function Navigation() {
  return (
    <nav className="md:w-1/3 mb-8 md:mb-0">
      <h1 className="text-2xl font-normal mb-6">Evil Twin Enterprises /</h1>
      <ul className="space-y-2 text-sm">
        {navItems.map((item, index) => (
          <li key={index} className={index > 0 ? 'border-t border-gray-200 pt-2' : ''}>
            <Link href="#" className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
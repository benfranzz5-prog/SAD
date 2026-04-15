import SectionTitle from '@/components/ui/SectionTitle'

const differentiators = [
  {
    number: '01',
    title: 'We Come To You',
    body: 'No drop-off, no waiting room, no wasted time. We work at your home, your office, or wherever your car is parked. All we need is power and water.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Premium Finish, Not Volume',
    body: 'Every car gets the full attention it deserves. We don\'t rush through a queue — this is deliberate, careful work focused on the result.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Direct With The Detailer',
    body: 'You talk to Sebastian — the person who will actually be detailing your car. No booking agents, no handoffs. You know exactly who is working on your vehicle.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
]

export default function WhySebastians() {
  return (
    <section className="section-pad bg-forest" aria-labelledby="why-heading">
      <div className="container">
        <div className="reveal mb-14">
          <SectionTitle
            eyebrow="Why Sebastian's"
            title="The difference is in the details."
            subtitle="A lot of detailers will clean your car. Here's what sets this one apart."
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-green-800">
          {differentiators.map((item, i) => (
            <div
              key={item.number}
              className={`reveal reveal-delay-${i + 1} bg-forest p-8 md:p-10`}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-heading text-[3rem] font-800 leading-none text-green-800 select-none" aria-hidden="true">
                  {item.number}
                </span>
                <div className="text-secondary mt-1">{item.icon}</div>
              </div>
              <h3 className="font-heading text-[1.4rem] font-700 text-primary mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-green-100/70 text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

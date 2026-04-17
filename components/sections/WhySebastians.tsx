import Image from 'next/image'

const differentiators = [
  {
    number: '01',
    title: 'We Come To You',
    body: 'No drop-off, no waiting room, no wasted time. We work at your home, office, or wherever your car is parked. All we need is power and water.',
  },
  {
    number: '02',
    title: 'Premium Finish, Not Volume',
    body: "Every car gets full attention. We don't rush through a queue — this is deliberate, careful work focused entirely on the result.",
  },
  {
    number: '03',
    title: 'Direct With The Detailer',
    body: "You talk to Sebastian — the person who will actually be working on your car. No booking agents, no handoffs. You know exactly who's doing the work.",
  },
]

export default function WhySebastians() {
  return (
    <section className="bg-[#003B20] overflow-hidden" aria-labelledby="why-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left column: text content */}
          <div className="section-pad pr-0 lg:pr-16">
            <div className="reveal mb-14">
              <p className="eyebrow mb-3 text-[#FFF8E6]/50">Why Sebastian's</p>
              <h2
                className="font-heading text-[#FFF8E6] leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800 }}
              >
                The difference is<br />
                in the details.
              </h2>
            </div>

            <div className="flex flex-col">
              {differentiators.map((item, i) => (
                <div
                  key={item.number}
                  className={`reveal reveal-delay-${i + 1} flex gap-6 py-8 ${
                    i < differentiators.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <span
                    className="font-heading font-bold leading-none text-white/15 shrink-0 select-none"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3
                      className="font-heading text-[#FFF8E6] font-bold leading-tight mb-2"
                      style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#FFF8E6]/60 text-[14px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Membership callout */}
            <div className="reveal mt-10 bg-white/5 border border-white/10 p-6">
              <p className="eyebrow mb-2 text-[#FFF8E6]/40">Monthly Club</p>
              <p
                className="font-heading text-[#FFF8E6] font-bold mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
              >
                Maintenance membership from $185/month
              </p>
              <p className="text-[#FFF8E6]/55 text-[13px] leading-relaxed">
                Paint preservation, interior upkeep, and complimentary polishes. Keep your car in peak condition year-round.
              </p>
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
              alt="Sebastian detailing a vehicle"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, #003B20 0%, transparent 30%)',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

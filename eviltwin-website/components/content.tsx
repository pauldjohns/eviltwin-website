export default function Content() {
  return (
    <article className="md:w-2/3">
      <h2 className="text-3xl font-normal mb-6">AI or Die</h2>
      <blockquote className="italic mb-6 text-gray-600">
        "You cannot overtake fifteen cars in sunny weather. But you can when it's raining." —Formula One driver
        Ayrton Senna
      </blockquote>
      <p className="mb-4">
        Did you read Dario's Amodei's (founder/CEO of Anthropic) post from late last year? This is what he
        suggested might be available from AI models, as early as 2026. The quote is long, but it's worth reading in
        full:
      </p>
      <p className="mb-4">
        "I have in mind an AI model—likely similar to today's LLMs in form, though it might be based on a different
        architecture, might involve several interacting models, and might be trained differently—with the following
        properties:
      </p>
      <p className="mb-4">
        In terms of pure intelligence, it is smarter than a Nobel Prize winner across most relevant fields – biology,
        programming, math, engineering, writing, etc. This means it can prove unsolved mathematical theorems,
        write extremely good novels, write difficult codebases from scratch, etc.
      </p>
      <p className="mb-4">
        In addition to just being a 'smart thing you talk to', it has all the 'interfaces' available to a human working
        virtually, including text, audio, video, mouse and keyboard control, and internet access.
      </p>
      <p className="mb-4">
        It can engage in any actions, communications, or remote operations enabled by this interface, including
        taking actions on the internet, talking or giving directions to humans, ordering materials, directing
        experiments, watching videos, making videos, and so on. It does all of these tasks with, again, a skill
        exceeding that of the most capable humans in the world.
      </p>
      <p className="mb-4">
        It does not just passively answer questions; instead, it can be given tasks that take hours, days, or weeks to
        complete, and then goes off and does those tasks autonomously, in the way a smart employee would, asking
        for clarification as necessary...
      </p>
      <p className="mb-4">
        The resources used to train the model can be repurposed to run millions of instances of it (this matches
        projected cluster sizes by ~2027), and the model can absorb information and generate actions at roughly
        10x-100x human speed. It may however be limited by the response time of the physical world or of software
        it interacts with.
      </p>
      <p className="mb-4">
        Each of these million copies can act independently on unrelated tasks, or if needed can all work together in
        the same way humans would collaborate, perhaps with different subpopulations fine-tuned to be especially
        good at particular tasks.
      </p>
      <p className="mb-4">We could summarize this as a 'country of geniuses in a datacenter'."</p>
      <p className="mb-4">A country of geniuses in a datacenter.</p>
      <p className="mb-4">Is your company positioned to take advantage of access to a country of geniuses in a datacenter?</p>
      <p className="mb-4">
        Is your company positioned to compete with the company that does take advantage of access to a
        country of geniuses in a datacenter?
      </p>
    </article>
  )
}
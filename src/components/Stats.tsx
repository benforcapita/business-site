
const Stats = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-white/80 mb-8">With over a decade of experience in software development, I've helped businesses of all sizes harness the power of technology.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">100+</p>
            <p className="text-white/80">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">10+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">50+</p>
            <p className="text-white/80">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

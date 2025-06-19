const SectionHeader = ({
  sectionEyebrow,
  sectionTitle,
  sectionSubtitle,
}: {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSubtitle: string;
}) => {
  return (
    <div>
      <p className="portfolio-theme-gradient bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
        {sectionEyebrow}
      </p>
      <h2 className="mt-6 text-center font-serif text-3xl capitalize md:text-5xl">
        {sectionTitle}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
        {sectionSubtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

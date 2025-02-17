import Link from 'next/link';

const PortfolioSection: React.FC = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <Link href="/MondayNightGroup">Monday Night Group</Link>
        </li>
        {/* Other portfolio items */}
      </ul>
    </section>
  );
};

export default PortfolioSection; 
import Link from 'next/link';

interface ShopAllButtonProps {
  href: string;
}

const ShopAllButton: React.FC<ShopAllButtonProps> = ({ href }) => {
  return (
    <Link href={href} className="border-black border-b-4 font-bold py-2 text-xl uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-500 hover:border-yellow-500">
      <span>Shop All</span>
    </Link>
  );
};

export default ShopAllButton;

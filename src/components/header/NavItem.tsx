interface OwnProps {
  label: string;
  to: string;
}

const NavItem = ({ label, to }: OwnProps) => {
  return (
    <a
      className={`inline-flex w-full whitespace-nowrap px-6 py-4 text-xl font-medium text-gray-700 hover:bg-cyan-600 hover:text-white focus:bg-cyan-600 focus:text-white focus:outline-none`}
      href={to}
    >
      {label}
    </a>
  );
};

export default NavItem;


interface Props {
    heading?: string;
    children?: JSX.Element | JSX.Element[];
  }

function FooterItem({ heading, children }: Props) {
  return (
    <div>
        <h3 className="mb-3 font-bold text-center sm:text-left text-white">{heading && heading}</h3>
        <div className="text-base text-center text-white sm:flex flex-col gap-3 sm:text-left">{children}</div>
    </div>
  )
}

export default FooterItem


interface Props {
    children?: JSX.Element | JSX.Element[];
}
      
function SectionItem({ children }: Props) {
    return (
        <section>
            <div className="text-base">{children}</div>
        </section>
    );
} 

export default SectionItem


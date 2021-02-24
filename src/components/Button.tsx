interface ButtonProps {
  type?: string;
  class: string;
  href: string;
  children: React.ReactNode;
}
export default (props: ButtonProps) => {
  return (
    <a href={props.href} className={props.class}>
      {props.children}
    </a>
  );
};

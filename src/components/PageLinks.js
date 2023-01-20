import { pageLinks } from "../data";
const PageLinks = (props) => {
  const ulClass = `${props.type}-links`;
  const aClass = `${props.type}-link`;
  return (
    <ul className={ulClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={aClass}>
              {" "}
              {link.text}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;

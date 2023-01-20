import { navIcons } from "../data";
const PageIcons = (props) => {
  const ulClass = `${props.type}-icons`;
  const aClass = `${props.type}-icon`;
  return (
    <ul className={ulClass}>
      {navIcons.map((icons) => {
        return (
          <li key={icons.id}>
            <a
              href={icons.href}
              target='_blank'
              className={aClass}
              rel='noreferrer'
            >
              <i className={icons.iconName}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageIcons;

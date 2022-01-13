import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  icon: string;
  href?: string;
  title:
    | "Overview"
    | "Transactions"
    | "Messagess"
    | "Card"
    | "Rewards"
    | "Settings"
    | "Log Out";
  active?: boolean;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { icon, title, active, href = "/member" } = props;

  const classTitle = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classTitle}>
      <div className="me-3">
        <Image
          src={`/icon/icon-menu-${icon}.svg`}
          alt="icon-sidebar"
          width={25}
          height={25}
        />
      </div>

      <p className="item-title m-0">
        <Link href={href}>
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}

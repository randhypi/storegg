import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            icon="overview"
            title="Overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            icon="transactions"
            title="Transactions"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem icon="messagess" title="Messagess" />
          <MenuItem icon="card" title="Card" />
          <MenuItem icon="rewards" title="Rewards" />
          <MenuItem
            icon="settings"
            title="Settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem icon="logout" title="Log Out" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}

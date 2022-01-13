import CategoriesItem from "./CategoriesItem";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <CategoriesItem
                icon="dekstop"
                categories="Game"
                type="Desktop"
                spent="Rp 18.000.500"
              />
              <CategoriesItem
                icon="mobile"
                categories="Game"
                type="Mobile"
                spent="Rp 8.455.000"
              />
              <CategoriesItem
                icon="dekstop"
                categories="Other"
                type="Categories"
                spent="Rp 5.000.000"
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legends: The New Battle 2021"
                  type="Dekstop"
                  item="200"
                  price="Rp 290.000"
                  status="Pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call of Duty:Modern"
                  type="Dekstop"
                  item="550"
                  price="Rp 740.000"
                  status="Success"
                />
                <TableRow
                  image="overview-3"
                  title="Clash of Clans"
                  type="Mobile"
                  item="100"
                  price="Rp 120.000"
                  status="Failed"
                />
                <TableRow
                  image="overview-4"
                  title="The Royal Game"
                  type="Mobile"
                  item="225"
                  price="Rp 200.000"
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
